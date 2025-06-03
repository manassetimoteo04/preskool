import { createUserAuth } from "../../services/apiAuth";
import { useAuth } from "@clerk/clerk-react";

export function useCreateUser() {
  const { getToken } = useAuth();

  async function createUser(user) {
    const token = await getToken();

    const data = await createUserAuth(user, token);
    return data;
  }
  return { createUser };
}
