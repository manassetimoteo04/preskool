export async function createUserAuth(user) {
  try {
    const response = await fetch("/api/createUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...user,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro:", data.message);

      return;
    }

    console.log("Usuário criado:", data.user);
    console.log("Usuário criado:", data.user);
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}
