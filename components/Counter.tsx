import { useState } from "react";

interface CounterProps {
  title: String;
  subtitle?: String;
}
export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(0);
  function up() {
    setCount(count + 1);
  }
  return (
    <>
      <div>카운터</div>
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
