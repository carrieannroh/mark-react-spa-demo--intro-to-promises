import wrapInPromise from "./helpers/wrapInPromise";

function printWithDelay(ms: number) {
  console.log("START of function body");

  // const promise = wrapInPromise({ wait: ms, value: "hello world!" });
  // const promise = wrapInPromise({ wait: ms, value: ["hello", "world!" ] });
  const promise = wrapInPromise({ wait: ms, value: ["hello", "world"].length });
  promise.then((resolveValue) => console.log(resolveValue));

  console.log("END of function body");
}

printWithDelay(2000);
