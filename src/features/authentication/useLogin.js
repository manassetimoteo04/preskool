import { useSignIn, useUser } from "@clerk/clerk-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const { signIn, setActive } = useSignIn();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { isLoaded, isSignedIn, user } = useUser();

  // eslint-disable-next-line no-unused-vars
  const role = user?.publicMetadata?.role;

  async function login(username, password) {
    try {
      setIsLoading(true);
      const result = await signIn?.create({
        identifier: username,
        password: password,
      });
      if (result?.status === "complete") {
        await setActive({ session: result.createdSessionId });

        navigate("/", { replace: true });
      }
    } catch (err) {
      toast.error(
        err.errors?.[0]?.message || "Erro de conexão, tente novamente"
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }
  return { login, isLoading };
}
