// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../libs/server/client";
import { User } from "@prisma/client";
import { json } from "stream/consumers";

interface Data {
  ok: boolean;
  user?: User;
  err?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ ok: false, err: "지원하지 않는 매서드입니다." });
  }

  try {
    const obj = JSON.parse(req.body);
    console.log(obj);
    if (!obj.name) {
      return res.status(200).json({ ok: false, err: "이름을 입력하세요" });
    }
    const updateUser = await client.user.update({
      where: {
        id: req.query.id?.toString(),
      },
      data: {
        name: obj.name,
      },
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(200).json({ ok: false, err: `${err}` });
  }
}
