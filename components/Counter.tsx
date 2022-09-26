import { useState } from "react";

interface props {
  title: string | number | Number[];
  subtitle?: String;
}

export default function Counter(props: props) {
  const [count, setCount] = useState(0);
  function up() {
    setCount(count + 1);
  }
  return (
    <div className="p-3">
      <div className="mb-2 text-4xl text-blue-500">카운터</div>
      <div>
        <h1 className="mb-2 text-3xl">
          카운터 : <span className=" text-red-400">{count}</span>
        </h1>
        <hr></hr>
        <button
          className="border-2 p-1 m-2 rounded-xl bg-slate-200 hover:bg-slate-400 hover:text-white"
          onClick={up}
        >
          +1
        </button>
        <button
          className=" border-2 p-1 m-2 rounded-xl bg-slate-200 hover:bg-slate-400 hover:text-white"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
      </div>
    </div>
  );
}
