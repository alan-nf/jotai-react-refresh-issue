import * as React from "react";
import { atom } from "jotai";
import { useAtomValue, useUpdateAtom } from "jotai/utils";

const countAtom = atom(0);

function Button() {
  const setCount = useUpdateAtom(countAtom);
  const increment = () => setCount((c) => (c = c + 1));
  return (
    <button
      style={{ width: 100, height: 30, fontSize: "large" }}
      onClick={increment}
    >
      +1
    </button>
  );
}

function Copy() {
  return <p>Click this button to increment the counter:</p>;
}

export default function JotaiTest() {
  const count = useAtomValue(countAtom);
  return (
    <div style={{ margin: 30, textAlign: "center" }}>
      <div style={{ fontSize: "xx-large" }}> Counter: {count}</div>
      <Copy />
      <div>
        <Button />
      </div>
      <p>Then edit this text (the counter will get reset)</p>
    </div>
  );
}
