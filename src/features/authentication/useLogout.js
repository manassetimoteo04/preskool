import { useAuth } from "@clerk/clerk-react";

function useLogout() {
  const { signOut: logout } = useAuth();
  return { logout };
}

export default useLogout;
