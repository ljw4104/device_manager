// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../libs/server/client";
import { User } from "@prisma/client";

interface Data {
  ok: boolean;
  user?: User;
  err?: string;
  deletedId?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const deleteUser = await client.user.delete({
      where: {
        id: req.query.id?.toString(),
      },
    });
    console.log(deleteUser);
    res.status(200).json({ ok: true, deletedId: deleteUser.id });
  } catch (err) {
    res.status(200).json({ ok: false, err: `${err}` });
  } finally {
    client.$disconnect();
  }
}
