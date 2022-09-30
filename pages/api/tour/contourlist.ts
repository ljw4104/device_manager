// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { parseString } from "xml2js";

type Data = {
  name: string;
  r?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { start, end } = req.query;
  if (!start) {
    start = "1";
    end = "5";
  } else {
    if (!end) {
      end = (Number(start) + 4).toString();
    }
  }

  if (Number(start) + 4 < Number(end)) {
    end = (Number(start) + 4).toString();
  }

  if (Number(start) >= Number(end)) {
    end = (Number(start) + 4).toString();
  }
  console.log(`${start},${end}`);

  try {
    fetch(
      `http://tour.chungnam.go.kr/_prog/openapi/?func=tour&start=${start}&end=${end}`
    )
      .then((res) => res.text())
      .then((xml) => {
        parseString(xml, { explicitArray: false }, function (err, obj) {
          console.log(JSON.stringify(obj, null, 2));
          res.status(200).json({ name: "성공", r: obj });
        });
      });
  } catch (err) {
    res.status(200).json({ name: "안대" });
  }
}
