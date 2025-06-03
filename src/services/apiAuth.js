export async function createUserAuth(user, token) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          password: import.meta.env.VITE_DEFAULT_USER_PASSWORD,
          username: user.username,
          email: user.name.split(" ").join("").toLowerCase() + "@gmail.com",

          publicMetadata: {
            role: user.role,
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro na resposta:", data);
      throw new Error(data.message || "Erro ao criar usuário");
    }

    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error; // Propague o erro para ser tratado pelo componente
  }
}
