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
  if (request.method === "POST") {
    console.log(request.body);
    const value = JSON.parse(request.body);
    console.log(value, deviceId);
    try {
      const d = await client.sencing.create({
        data: {
          value: value,
          deviceId: deviceId.toString(),
        },
      });
      return response.status(200).json({ ok: true });
    } catch (err) {
      console.log({ err });
      return response.status(200).json({ ok: false, error: `${err}` });
    }
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

    response.status(200).json({ ok: true, value: result?.value });
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err}` });
  } finally {
    client.$disconnect();
  }
}
