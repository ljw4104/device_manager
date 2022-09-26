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
    <>
      <div>카운터</div>
      <h1>{props.title.toString()}</h1>
      <div>
        <h1>카운터 {count}</h1>
        <button className="" onClick={up}>
          +1
        </button>
        <button
          className=""
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
      </div>
    </>
  );
}
