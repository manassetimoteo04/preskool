import { useNavigate, useLocation } from "react-router-dom";

import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import FullPageSpinner from "./FullPageSpinner";
import { getCurrentUserData } from "../services/apiAuth";
import { useCurrentUser } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoaded, isSignedIn, user } = useUser();
  const { setCurrentUser } = useCurrentUser();

  const role = user?.publicMetadata?.role;
  useEffect(() => {
    if (isLoaded && !isSignedIn) navigate("/login", { replace: true });
  }, [isLoaded, isSignedIn, navigate, role]);

  useEffect(() => {
    async function fetchData() {
      const role = user?.publicMetadata.role;
      if (isSignedIn && user) {
        setCurrentUser({ isLoading: true });

        const userData = await getCurrentUserData({
          table: role === "student" ? "students" : "teachers",
          id: user?.id,
        });
        setCurrentUser({ user: userData, isLoading: false });
      }
    }
    fetchData();
  }, [isSignedIn, user, setCurrentUser]);

  useEffect(() => {
    if (!location.pathname.startsWith("/area/")) {
      if (role === "student") navigate("/area/student", { replace: true });
      if (role === "teacher") navigate("/area/teacher", { replace: true });
      if (role === "admin") navigate("/area/admin", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  if (!isLoaded) return <FullPageSpinner />;
  if (isSignedIn) return children;
}

export default ProtectedRoute;
