import React from "react";
import ReactDOM from "react-dom";
import { getNodeText, waitFor, fireEvent, screen } from "@testing-library/dom";
import { useTimeout } from "App";

const originalWindowSetTimeout = window.setTimeout;
const originalWindowClearTimeout = window.clearTimeout;

//@ts-ignore
window.setTimeout = fakeSetTimeout;
//@ts-ignore
window.clearTimeout = fakeClearTimeout;

test("callback should be triggered after the delay", async () => {
  const $root = document.querySelector("#root");
  const calls = [];
  const callback = () => calls.push(currentTime);

  function App() {
    useTimeout(callback, 1000);
    return null;
  }
  ReactDOM.render(<App />, $root);

  await wait(100);
  await run();
  expect(calls).toEqual([1000]);
});

// below is some test utils for fake timers

let currentTime = 0;
const pipeline: Array<readonly [number, () => void]> = [];

function fakeSetTimeout(func: () => void, wait: number) {
  const next = currentTime + wait;
  const index = searchIndex(next);
  const set = [next, func] as const;
  pipeline.splice(index, 0, set);
  return set;
}

function fakeClearTimeout(set: readonly [number, () => void]) {
  for (let i = 0; i < pipeline.length; i++) {
    if (pipeline[i] === set) {
      pipeline.splice(i, 1);
      break;
    }
  }
}
