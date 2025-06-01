export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { username, password, publicMetadata } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Faltando username ou senha" });
  }

  try {
    const response = await fetch("https://api.clerk.com/v1/users", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        public_metadata: publicMetadata || {},
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro do Clerk:", data);
      return res
        .status(response.status)
        .json({ message: data.message || "Erro ao criar usuário" });
    }

    return res.status(201).json({ user: data });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
