import * as fs from 'fs'
import {Handler} from "types";

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const handler: Handler = async (inputs, outputs) => {
    await sleep(inputs.sleepTimeMs)
    console.log("Slept " + inputs.sleepTimeMs + " seconds")
    if (inputs.file) {
      const fileContent = await inputs.file.read()
      console.log("Read file:", fileContent)
      await outputs.file.write(fileContent + " Hey there again!")
    } else {
      await outputs.file.write("Hey there!")
    }

    outputs.sleepTimeMs = inputs.sleepTimeMs + 1000

    return 0
};
