import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { Device } from "@prisma/client";
import { useEffect, useState } from "react";
import DeviceCard from "../components/DeviceCard";
import { fail } from "assert";
import {
  MoonLoader,
  PacmanLoader,
  RingLoader,
  RotateLoader,
} from "react-spinners";

const Home: NextPage = () => {
  const [allDevice, setAllDevice] = useState<Device[]>([]);
  const [r, setr] = useState(false);

  function toggle() {}

  useEffect(() => {
    fetch(`/api/device/all`)
      .then((res) => res.json())
      .then((json) => setAllDevice(json.allDevice));
  }, []);

  return (
    <>
      <Layout title="HOME">
        <div className="ml-20"></div>
        <div className="h-[80vh] overflow-y-scroll p-6 overflow-auto">
          <div id="웰컴메세지" className=" flex justify-between items-center">
            <div>
              <div className="text-4xl font-bold">Hello LJW 🖐</div>
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
                <DeviceCard
                  key={idx}
                  device={device}
                  realTime={false}
                ></DeviceCard>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
