import { ServerRest } from "@/utils/backend/server-rest";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      try {
        const { data } = await ServerRest.post("/api/users/register", {
          ...req.body,
        });

        return res.status(200).send(data);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          return res.status(404).end();
        }
      }
      break;

    case "GET":
      try {
        const { data } = await ServerRest.get("/api/users");

        return res.status(200).send(data);
      } catch (error: any) {
        if (error?.response?.status === 404) {
          return res.status(404).end();
        }
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
