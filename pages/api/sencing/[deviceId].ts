// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Value } from "@prisma/client/runtime";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";

interface Data {
  ok: boolean;
  error?: string;
  value?: Value;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  const { deviceId } = request.query;
  if (!deviceId) {
    return response.status(200).json({
      ok: false,
      error: "장치 ID를 입력해주세요",
    });
  }

  try {
    const result = await client.sencing.findFirst({
      where: {
        deviceId: deviceId.toString(),
      },
      select: {
        value: true,
      },
      orderBy: {
        createAt: "desc",
      },
    });
    console.log(result?.value);

    response.status(200).json({ ok: true, value: result?.value });
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err}` });
  }
}
