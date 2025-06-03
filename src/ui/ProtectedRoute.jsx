import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn, user } = useUser();

  const role = user?.publicMetadata?.role;
  useEffect(() => {
    if (isLoaded && !isSignedIn) navigate("/login", { replace: true });
    if (role === "student") navigate("/area/student", { replace: true });
    if (role === "teacher") navigate("/area/teacher", { replace: true });
  }, [isLoaded, isSignedIn, navigate, role]);
  if (isSignedIn) return children;
}

export default ProtectedRoute;
