import { ServerRest } from "@/utils/backend/server-rest";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.authorization;

  switch (req.method) {
    case "GET":
      try {
        const { cid } = req.query;

        const { data } = await ServerRest.get(`/api/carts/${cid}`, {
          headers: {
            Authorization: token,
          },
        });

        return res.status(200).send(data);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          return res.status(404).end();
        }
      }
      break;

    case "DELETE":
      try {
        const { cid } = req.query;

        const { data } = await ServerRest.delete(`/api/carts/${cid}`, {
          headers: {
            Authorization: token,
          },
        });

        return res.status(200).send(data);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          return res.status(404).end();
        }
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
