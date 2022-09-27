import type { NextPage } from "next";
import { useState } from "react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const [location, setLocation] = useState("");
  const [product, setProduct] = useState("");
  const [unit, setUnit] = useState("");
  const [memo, setMemo] = useState("");

  function togleNewDevice() {
    document.querySelector("#add_Device_container")?.classList.toggle("hidden");
    setLocation("");
    setProduct("");
    setUnit("");
    setMemo("");
  }
  return (
    <>
      <Layout title="SETTING">
        <div className="p-6 space-y-4">
          <div data-comment="장비추가버튼" className="flex justify-end">
            <div
              onClick={togleNewDevice}
              className="flex space-x-2 py-4 px-5 rounded-2xl btn"
            >
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
          </div>

          <div id="add_Device_container" className="space-y-4 hidden">
            <hr></hr>
            <div className="mt-2 text-3xl font-bold">New Device</div>
            <div className=" flex flex-col">
              <span>제품명</span>
              <input
                type={"text"}
                value={product}
                onChange={(e) => setProduct(e.currentTarget.value)}
                placeholder="제품명을 입력하세요.."
                className="h-8 ring-2 ring-black text-gray-800 px-2"
              />
            </div>

            <div className=" flex flex-col">
              <span>설치위치</span>
              <input
                type={"text"}
                value={location}
                onChange={(e) => setLocation(e.currentTarget.value)}
                placeholder="거실, 안방...etc"
                className="h-8 ring-2 ring-black text-gray-800 px-2"
              />
            </div>

            <div className=" flex flex-col">
              <span>단위</span>
              <input
                type={"text"}
                value={unit}
                onChange={(e) => setUnit(e.currentTarget.value)}
                placeholder="측정 단위 EX)℃,℉.."
                className="h-8 ring-2 ring-black text-gray-800 px-2"
              />
            </div>

            <div className=" flex flex-col">
              <span>메모</span>
              <input
                type={"text"}
                value={memo}
                onChange={(e) => setMemo(e.currentTarget.value)}
                placeholder="메모를 입력하세요.."
                className="h-8 ring-2 ring-black text-gray-800 px-2"
              />

              <button className="btn w-fll my-5 p-2 rounded-md">등록</button>

              <hr></hr>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
