import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const backendHost = process.env.BACKEND_HOST;
  const backendPort = process.env.BACKEND_PORT;
  const url = `http://${backendHost}:${backendPort}/`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json({ message: data.message });
}
