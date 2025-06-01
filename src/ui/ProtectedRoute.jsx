import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (isLoaded && !isSignedIn) navigate("/login", { replace: true });
  }, [isLoaded, isSignedIn, navigate]);
  if (isSignedIn) return children;
}

export default ProtectedRoute;
