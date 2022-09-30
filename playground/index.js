import fetch from "node-fetch";
import { parseString } from "xml2js";
import csv from "csvtojson";
console.log("hello world");
import { Parser } from "json2csv";
import fs from "fs";
// import { parseString } from "xml2js";
// // var parseString = require("xml2js").parseString;
// parseString();

// var xml = `<?xml version="1.0" encoding="utf-8"?>
// <item_info>
//     <item>
//         <totalCnt>460</totalCnt>
//     </item>
// </item_info>`;
// parseString(xml, function (err, obj) {
//   console.log(JSON.stringify(obj, null, 2));
// });

// parseString(xml, { explicitArray: false }, function (err, obj) {});

// fetch(`http://tour.chungnam.go.kr/_prog/openapi/?func=tour&mode=getCnt`)
//   .then((res) => res.text())
//   .then((xml) => {
//     parseString(xml, { explicitArray: false }, function (err, obj) {
//       console.log(JSON.stringify(obj, null, 2));
//       console.log(obj.item_info.item.totalCnt);
//     });
//   });

const csvFilePath = "./input/data.csv";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);

    const fields = ["학번", "주소"];
    const opts = { fields };

    try {
      const parser = new Parser(opts);
      const csv = parser.parse(jsonObj);
      console.log(csv);

      fs.writeFileSync("./output/결과.csv", csv);
    } catch (err) {
      console.error(err);
    }
  });
