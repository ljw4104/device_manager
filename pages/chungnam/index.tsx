import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { parseString } from "xml2js";
import { json } from "stream/consumers";
import Link from "next/link";

// interface Item {
//   mng_no: string;
//   local_nm: string;
//   type: string;
//   addr: string;
//   desc: string;
//   h_url: string;
//   latlist_img: string;
//   lng: string;
//   nm: string;
//   nm_sub: string;
//   tel: string;
// }

// interface Item_info {
//   item: Item[];
// }

// interface R {
//   item_info: Item_info;
// }

// interface ContourlistType {
//   name: string;
//   r?: R;
// }

export interface ContourlistType {
  name: string;
  r: R;
}

export interface R {
  item_info: ItemInfo;
}

export interface ItemInfo {
  item: Item[];
}

export interface Item {
  mng_no: string;
  local_nm: string;
  type: string;
  nm: string;
  nm_sub: string;
  addr: string;
  lat: string;
  lng: string;
  tel: string;
  h_url: string;
  desc: string;
  list_img: string;
}

const Home: NextPage = () => {
  const [tours, setTours] = useState<Item[] | undefined>([]);
  const [totalCnt, setTotalCnt] = useState("");
  const [pageNo, setPageNo] = useState(1);

  function 관광명소가져오기() {
    fetch(`/api/tour/contourlist?start=${pageNo}&end=${pageNo + 2}`)
      .then((res) => res.json())
      .then((json: ContourlistType) => {
        const 기존배열 = tours || [];
        const 신규배열 = json.r?.item_info.item || [];
        setTours([...기존배열, ...신규배열]);
        setPageNo(pageNo + 3);
      });
  }

  useEffect(() => {
    fetch(`/api/tour/cntour`)
      .then((res) => res.json())
      .then((json) => setTotalCnt(json.totalCnt));
  }, []);

  useEffect(() => {
    관광명소가져오기();
  }, []);
  return (
    <>
      <Layout title="충남 관광명소">
        <hr></hr>
        <div className="h-[80vh] overflow-y-scroll p-4 overflow-auto">
          {tours?.map((tour, idx) => {
            return (
              <Link href={`/chungnam/${tour.mng_no}`}>
                <a>
                  <div key={idx} className="flex">
                    <img className="w-24" src={tour.list_img}></img>
                    <div>{tour.nm}</div>
                    <div>{tour.nm_sub}</div>

                    <hr></hr>
                  </div>
                </a>
              </Link>
            );
          })}
          <button
            className="btn w-fll my-5 p-2 rounded-md"
            onClick={관광명소가져오기}
          >
            더보기 ({tours?.length} / {totalCnt}) -{(pageNo - 1) / 3}페이지
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Home;
