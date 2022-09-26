// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/server/client";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const user = await client.user.create({
      data: { addr: "집", age: 25, name: "정운이" },
    });
    res.status(200).json({ name: "잘감" });
  } catch (err) {
    res.status(200).json({ name: "틀림" });
  }
}
