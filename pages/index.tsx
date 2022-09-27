import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import { User } from "@prisma/client";

const Home: NextPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [rename, setRename] = useState("");

  function addUser() {
    fetch("/api/addUser")
      .then((res) => res.json())
      .then((json) => {
        setUsers([...users, json.user]);
      });
  }

  function delUser(id: string) {
    fetch(`/api/user/delete/${id}`)
      .then((res) => res.json())
      .then((json) => {
        const deletedUser = users.filter((e) => e.id !== json.deletedId);
        setUsers(deletedUser);
      });
  }

  //업데이트 예시
  function userRename(id: string) {
    if (!rename) return;

    const data = { name: rename };

    fetch(`/api/user/update/${id}`, {
      method: `POST`,
      body: JSON.stringify(data),
    });
    console.log(id);
    console.log(rename);
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
      <button
        className=" bg-slate-200 rounded-2xl p-4 m-1 hover:bg-slate-400 hover:text-white"
        onClick={addUser}
      >
        사용자 추가
      </button>

      <div className="flex flex-wrap">
        {users.map((user) => (
          <div key={user.id} className=" m-1 border-2">
            <button
              className=" bg-red-200 rounded-2xl p-2 m-1 hover:bg-red-400 hover:text-white"
              onClick={() => delUser(user.id)}
            >
              사용자 제거
            </button>
            <div>
              <input
                type={"text"}
                className="border-2"
                value={rename}
                onChange={(e) => setRename(e.currentTarget.value)}
              ></input>
              <button
                className=" bg-slate-200 rounded-2xl p-2 m-1 hover:bg-slate-400 hover:text-white"
                onClick={() => userRename(user.id)}
              >
                수정
              </button>
            </div>
            <div className="text-2xl">{user.name}</div>
            <div>{user.addr}</div>
            <div>{user.age}</div>
            <div>{user.favFood}</div>
            <div>{user.createAt.toString()}</div>
            <div>{user.id}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
