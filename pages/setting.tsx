import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Device } from "@prisma/client";
import { join } from "path";
import { json } from "stream/consumers";

const Home: NextPage = () => {
  const [location, setLocation] = useState(""); //설치위치
  const [product, setProduct] = useState(""); //장치명
  const [type, setType] = useState(""); //장치종류
  const [unit, setUnit] = useState(""); //단위
  const [memo, setMemo] = useState(""); //메모
  const [errorMesage, setErrorMesage] = useState(""); //에러메세지
  const [allDevice, setAllDevice] = useState<Device[]>([]);

  function togleNewDevice() {
    //add 디바이스 클릭시 초기화
    document.querySelector("#add_Device_container")?.classList.toggle("hidden");
    setLocation("");
    setProduct("");
    setUnit("");
    setMemo("");
  }

  //<select change
  function changeDevice(e: React.ChangeEvent<HTMLSelectElement>) {
    setType(e.currentTarget.value);
  }

  function initBtn() {
    if (!product) {
      setErrorMesage("제품명을 입력하세요");
      return;
    }

    if (!location) {
      setErrorMesage("설치위치를 입력하세요");
      return;
    }

    if (!product) {
      setErrorMesage("단위를 입력하세요");
      return;
    }

    if (!type) {
      setErrorMesage("장치를 선택하세요");
      return;
    }

    const data = { product, location, unit, type, memo };

    fetch("/api/device/add", {
      method: `POST`,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  //: React.MouseEvent<HTMLButtonElement
  function delDevice(e: string) {
    if (!e) return alert("아이디 없음");
    fetch(`/api/device/del/${e}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    fetch("/api/device/all")
      .then((res) => res.json())
      .then((json) => setAllDevice(json.allDevice));
  }, []);
  return (
    <>
      <Layout title="SETTING">
        <div className="h-[80vh] overflow-y-scroll p-4 overflow-auto">
          <div className="p-2 space-y-4">
            <div data-comment="장비추가버튼" className="flex justify-end">
              <div
                onClick={togleNewDevice}
                className="flex space-x-2 py-4 px-5 rounded-2xl btn mt-1"
              >
                <span>Add Device </span>
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
              <div className="flex flex-col">
                <span>장치종류 *</span>
                <select
                  onChange={changeDevice}
                  value={type}
                  className="h-8 ring-2 ring-black text-gray-800 px-2"
                >
                  <option hidden>장치선택</option>
                  <option value="TEMP">온도 센서</option>
                  <option value="HUMI">습도 센서</option>
                  <option value="CO2">CO2 센서</option>
                </select>
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

                {errorMesage ? (
                  <div className="text-red-600 mt-1"> {errorMesage} </div>
                ) : null}

                <button
                  className="btn w-fll my-5 p-2 rounded-md"
                  onClick={initBtn}
                >
                  등록
                </button>

                <hr></hr>
              </div>
            </div>
          </div>
          <div data-comment="장비삭제메뉴">
            <div>
              {allDevice.map((device, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b-2 mb-4 py-4"
                >
                  <div>
                    <div>{device.product}</div>
                    <div>{device.location}</div>
                    <div>{device.memo}</div>
                  </div>

                  <button
                    onClick={() => delDevice(device.id)}
                    className=" text-red-600 hover:bg-red-300 bg-red-100 w-16 h-16 rounded-xl"
                  >
                    삭제
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
