// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../libs/server/client";

interface Data {
  ok: boolean;
  error?: string;
  delDevice?: string;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  try {
    //Device row Create
    const delDevice = await client.device.delete({
      where: {
        id: request.query.deviceId?.toString(),
      },
    });

    response.status(200).json({ ok: true, delDevice: delDevice.id });
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err}` });
  }
}
