export async function createUserAuth({ username, password, fullName, role }) {
  try {
    const response = await fetch("/api/createUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        publicMetadata: { fullName, role },
        privateMetadata: {},
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro:", data.message);
      return;
    }

    console.log("Usuário criado:", data.user);
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}
