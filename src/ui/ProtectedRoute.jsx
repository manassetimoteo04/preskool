import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import FullPageSpinner from "./FullPageSpinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn, user } = useUser();

  const role = user?.publicMetadata?.role;
  useEffect(() => {
    if (isLoaded && !isSignedIn) navigate("/login", { replace: true });
  }, [isLoaded, isSignedIn, navigate, role]);
  useEffect(() => {
    if (role === "student") navigate("/area/student", { replace: true });
    if (role === "teacher") navigate("/area/teacher", { replace: true });
    if (role === "admin") navigate("/area/admin", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);
  if (!isLoaded) return <FullPageSpinner />;
  if (isSignedIn) return children;
}

export default ProtectedRoute;
