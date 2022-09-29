// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import { Device } from "@prisma/client";

interface Data {
  ok: boolean;
  error?: string;
  newDevice?: Device;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  //405메서드 오류 체크
  if (request.method !== "POST") {
    response.status(405).json({
      ok: false,
      error: `지원하지않는 매서드입니다. : ${request.method}`,
    });

    return;
  }

  const { product, location, type, unit, memo } = JSON.parse(request.body);

  //문자열이 없을때 오류검증
  if (true) {
    if (!product)
      return response
        .status(200)
        .json({ ok: false, error: "제품명이 없습니다." });

    if (!location)
      return response
        .status(200)
        .json({ ok: false, error: "장소가 없습니다." });

    if (!type)
      return response
        .status(200)
        .json({ ok: false, error: "타입이 잘못되었습니다." });

    if (!unit)
      return response
        .status(200)
        .json({ ok: false, error: "단위가 없습니다." });
  }

  try {
    //Device row Create

    const newDevice = await client.device.create({
      data: {
        product,
        type,
        unit,
        memo,
        location,
      },
    });
    response.status(200).json({ ok: true, newDevice });
  } catch (err) {
    response.status(200).json({ ok: false, error: `${err}` });
  } finally {
    client.$disconnect();
  }
}
