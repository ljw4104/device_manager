// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import { Device } from "@prisma/client";

interface Data {
  ok: boolean;
  error?: string;
  allDevice?: Device[];
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  try {
    //Device row Create
    const allDevice = await client.device.findMany();

    response.status(200).json({ ok: true, allDevice });
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err}` });
  } finally {
    client.$disconnect();
  }
}
