// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";

type Data = {
  name: string;
  totalCnt?: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    fetch(`http://tour.chungnam.go.kr/_prog/openapi/?func=tour&mode=getCnt`)
      .then((res) => res.text())
      .then((xml) => {
        parseString(xml, { explicitArray: false }, function (err, obj) {
          console.log(JSON.stringify(obj, null, 2));
          const totalCnt = obj.item_info.item.totalCnt;
          res.status(200).json({ name: "성공", totalCnt });
        });
      });
  } catch (err) {
    res.status(200).json({ name: "안대" });
  }
}
