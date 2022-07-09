import {Handler} from "./types";
import {File, logger} from "@edurata/sdk"

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const testAllLogs = () => {
  logger.info("Test info")
  logger.debug("Test debug")
  logger.warning("Test warning")
  logger.error("Test error")
  logger.alert("Test alert")
}

export const handler: Handler = async (inputs) => {
  let newFile = new File();
  testAllLogs()
  await sleep(inputs.sleepTimeMs)
  logger.info("Slept " + inputs.sleepTimeMs + " seconds")
  if (inputs.file) {
    const fileContent = await inputs.file.read()
    logger.info(`Read file: ${fileContent}`)
    await newFile.write(fileContent + " Hey there again!")
  } else {
    await newFile.write("Hey there!")
  }

  return {
    sleepTimeMs: inputs.sleepTimeMs + 1000,
    file: newFile
  }
};