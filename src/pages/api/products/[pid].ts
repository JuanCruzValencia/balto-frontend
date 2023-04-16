import { ServerRest } from "@/utils/backend/server-rest";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const token = req.headers.authorization;
    const { pid } = req.query;

    try {
      const { data } = await ServerRest.get(`/api/products/${pid}`, {
        headers: {
          Authorization: token,
        },
      });

      return res.send(data);
    } catch (error: any) {
      if (error?.response?.status === 404) {
        return res.status(404).end();
      }
      return res.status(error?.response?.status || 500).send(error.message);
    }
  }
}
