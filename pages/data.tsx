import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Device } from "@prisma/client";
import { json } from "stream/consumers";
const Home: NextPage = () => {
  const [value, setValue] = useState(0.1);
  const [selectedId, setSelectedId] = useState("");
  const [allDevice, setAllDevice] = useState<Device[]>([]);

  useEffect(() => {
    fetch(`api/device/all`)
      .then((res) => res.json())
      .then((json) => {
        if (json.ok) {
        }
        setAllDevice(json.allDevice);
      });
  }, []);

  function inputdata(id: string) {
    console.log(id);
    fetch(`api/sencing/${id}`, { method: "POST", body: JSON.stringify(value) });
  }

  function changeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedId(e.currentTarget.value);
    console.log(e.currentTarget.value);
  }
  return (
    <>
      <Layout title="DATA">
        <div className="h-[80vh] overflow-y-scroll p-4 overflow-auto space-y-4">
          <h2 className="text-3xl font-bold mb-3">장비 선택</h2>
          <div>
            <select
              onChange={changeSelect}
              className="w-full h-8 ring-2 ring-black text-gray-800 px-2"
            >
              <option hidden>장비를 선택하세요</option>
              {allDevice.map((device) => (
                <option key={device.id} value={device.id}>
                  [{device.type}]-{device.product}-[{device.location}]
                </option>
              ))}
            </select>
          </div>
          {selectedId ? (
            <div className="flex flex-col space-y-5">
              <h2 className="text-2xl font-bold">선택된 장비 {selectedId}</h2>
              <input
                type={"Number"}
                onChange={(e) => setValue(parseFloat(e.currentTarget.value))}
                placeholder="측정값을 입력하세요"
                className="h-8 ring-2 ring-black text-gray-800 px-2"
              />

              <button
                className="btn w-fll my-5 p-2 rounded-md"
                onClick={() => inputdata(selectedId)}
              >
                등록
              </button>
            </div>
          ) : null}
        </div>
      </Layout>
    </>
  );
};

export default Home;
