import {Handler} from "types";
import {File} from "/opt/files"

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const handler: Handler = async (inputs) => {
  let newFile = new File();
  await sleep(inputs.sleepTimeMs)
  console.log("Slept " + inputs.sleepTimeMs + " seconds")
  if (inputs.file) {
    const fileContent = await inputs.file.read()
    console.log("Read file:", fileContent)
    await newFile.write(fileContent + " Hey there again!")
  } else {
    await newFile.write("Hey there!")
  }

  return {
    sleepTimeMs: inputs.sleepTimeMs + 1000,
    file: newFile
  }
};
