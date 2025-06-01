import { createUserAuth } from "../../services/apiAuth";

export function useCreateUser() {
  async function createUser(user) {
    const data = await createUserAuth(user);
    console.log(data);
  }
  return { createUser };
}
