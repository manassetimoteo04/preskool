// api/createUser.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Missing username or password" });
  }

  try {
    const response = await fetch("https://api.clerk.dev/v1/users", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLERK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username, // manda o username aqui
        password, // manda a senha aqui
        // se quiser, pode adicionar email_address: [] também
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res
        .status(response.status)
        .json({ message: errorData.message || "Erro ao criar usuário" });
    }

    const data = await response.json();
    return res.status(201).json({ user: data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
