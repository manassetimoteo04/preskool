import { verifyToken } from "@clerk/clerk-sdk-node";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Token de autorização ausente ou mal formatado" });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
    await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    const { username, password, publicMetadata, email } = req.body;

    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ message: "Faltando username, email ou senha" });
    }

    const cleanUsername = username.trim().toLowerCase();

    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password)
    ) {
      return res.status(400).json({
        message:
          "Senha fraca. Use pelo menos 8 caracteres, com letras e números.",
      });
    }

    const response = await fetch("https://api.clerk.com/v1/users", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: cleanUsername,
        password,
        email_addresses: [email],
        public_metadata: publicMetadata || {},
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        message: "Erro ao criar usuário no Clerk",
        clerkError: data,
      });
    }

    return res.status(201).json({ user: data });
  } catch (err) {
    return res.status(401).json({
      message: "Token inválido ou erro ao criar usuário",
      error: err.message,
    });
  }
}
