import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { Device } from "@prisma/client";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [allDevice, setAllDevice] = useState<Device[]>([]);

  useEffect(() => {
    fetch(`/api/device/all`)
      .then((res) => res.json())
      .then((json) => setAllDevice(json.allDevice));
  }, []);

  return (
    <>
      <Layout title="HOME">
        <div className="h-[80vh] overflow-y-scroll p-6 overflow-auto">
          <div id="웰컴메세지" className=" flex justify-between items-center">
            <div>
              <div className="text-4xl font-bold">Hello HOME 🖐</div>
              <div className="text-gray-400">Welcome HOME</div>
            </div>
            <Link href={"/setting"}>
              <div className="flex space-x-2 py-4 px-5 rounded-2xl btn ">
                <span>Add Device</span>
                <span data-comment="플러스아이콘">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
          <div id="링크드유" className="mt-6 flex justify-between items-center">
            <div className=" text-2xl font-bold">Linked To You</div>
            <div>실시간 버튼 자리</div>
          </div>
          <div id="센서목록" className="mt-8 flex flex-wrap">
            {allDevice.map((device, idx) => {
              return (
                <div
                  key={idx}
                  data-comment="장비카드"
                  className="bg-[#9cd4ff] dark:bg-[#17a76d] m-5 shadow-lg w-60 h-52 p-4 flex flex-col justify-between rounded-xl"
                >
                  <div className="flex justify-end items-end">
                    <span className="text-4xl font-bold">{"센싱"}</span>
                    <span className="">{device.unit}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="dark:text-gray-200 text-gray-600">
                      {device.type}
                    </span>
                    <span className="dark:text-gray-200 text-gray-500">
                      {device.memo}
                    </span>
                    <span className=" text-3xl font-bold">
                      {device.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
