import sleep from "./helpers/sleep";

function printStraightforwardly(message: string) {
  console.log("START of function body");

  console.log(message);

  console.log("END of function body");
}

function printWithSleep(message: string) {
  console.log("START of function body");

  sleep(5000);
  console.log(message);

  console.log("END of function body");
}

// printStraightforwardly("Hello world!");
printWithSleep("Hello world!");
