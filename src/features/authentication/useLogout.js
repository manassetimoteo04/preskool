import { useClerk } from "@clerk/clerk-react";
import { useQueryClient } from "@tanstack/react-query";

function useLogout() {
  const { signOut } = useClerk();
  const queryClient = useQueryClient();
  async function logout() {
    await signOut(() => {
      window.history.pushState({}, "", "/login");
    });
    queryClient.clear();
  }
  return { logout };
}

export default useLogout;
