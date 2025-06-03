import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";

export function useCurrentUser() {
  const { data: user, isLoading } = useQuery({
    queryFn: useUser,
    queryKey: ["user"],
  });

  return { user, isLoading };
}
