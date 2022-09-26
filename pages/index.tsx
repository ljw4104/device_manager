import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import { User } from "@prisma/client";

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  function addUser() {
    console.log("실행확인");
    fetch("/api/addUser");
  }

  useEffect(() => {
    //컴포넌트가 로딩 될때 한번만 실행
    //사용자 목록을 가져와서 state변수에 저장

    fetch("/api/allUser")
      .then((res) => res.json())
      .then((json) => setUsers(json.users));
  }, []);

  return (
    <>
      <Counter title={[1, 2, 3, 4, 5, 6]}></Counter>
      <button className=" bg-slate-200 rounded-2xl p-4 " onClick={addUser}>
        사용자 추가
      </button>
      <div className="flex flex-wrap">
        {users.map((user) => (
          <div key={user.id} className=" ml-2 border-2">
            <div className="text-2xl">{user.name}</div>
            <div>{user.addr}</div>
            <div>{user.age}</div>
            <div>{user.favFood}</div>
            <div>{user.createAt.toString()}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
