import * as fs from 'fs'
import {Handler} from "types";

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const handler: Handler = async (inputs) => {
    await sleep(inputs.sleepTimeMs)
    console.log("Slept " + inputs.sleepTimeMs + " seconds")
    if (inputs.file) {
      fs.appendFileSync('/tmp/test.txt', ' Hey there again!');
    } else {
      fs.writeFileSync('/tmp/test.txt', 'Hey there!');
    }

    return  {
        sleepTimeMs: inputs.sleepTimeMs + 1000,
        file: "file:test.txt"
    };
};
