import { Device } from "@prisma/client";
import { useEffect, useState } from "react";
import { json } from "stream/consumers";

interface deviceCardProps {
  device: Device;
}
export default function deviceCard({ device }: deviceCardProps) {
  const [value, setValue] = useState(-1);
  useEffect(() => {
    fetch(`/api/sencing/${device.id}`)
      .then((res) => res.json())
      .then((json) => setValue(json.value));
  }, []);

  return (
    <div>
      <div
        data-comment="장비카드"
        className="bg-[#9cd4ff] dark:bg-[#17a76d] m-5 shadow-lg w-60 h-52 p-4 flex flex-col justify-between rounded-xl"
      >
        <div className="flex justify-end items-end">
          <span className="text-4xl font-bold">{value ? value : "--"}</span>
          <span className="">{device.unit}</span>
        </div>
        <div className="flex flex-col">
          <span className="dark:text-gray-200 text-gray-600">
            {device.type}
          </span>
          <span className="dark:text-gray-200 text-gray-500">
            {device.memo}
          </span>
          <span className=" text-3xl font-bold">{device.location}</span>
        </div>
      </div>
    </div>
  );
}
