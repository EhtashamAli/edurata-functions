import * as fs from "fs"
import type {Handler} from "./interface.d.js"
import type {TypescriptFile, OasFile} from "@edurata/types"
import type {OpenAPIV3} from "openapi-types"
const yaml = require('js-yaml');

const handler: Handler = async (inputs) => {
  // console.log(inputs.oasInput)
  
  const openapiTS = (await import('openapi-typescript')).default;
  console.log(openapiTS)
  let tsOutput;
  if (isOasFile(inputs.oasInput)) {
    const oasFile = inputs.oasInput as OasFile
    // tsOutput = await openapiTS(JSON.parse(oasFile.fileType));
  // is Url
  } else {
    tsOutput = await openapiTS(JSON.stringify(oasFile));
  }
  console.log(tsOutput)
  // fs.writeFile("/tmp/types.d.ts", tsOutput, (res)=> console.log(res)); 
  const returnedFile: TypescriptFile = {
    path: "",
    fileName: "",
    fileType: "ts"
  }
  return {
    file: returnedFile
  }
};

const test = fs.promises.readFile("./tests/spotify.yaml", {encoding: "utf8"})
.then((fileCOntent: string) => handler({
  oasInput: yaml.load(fileCOntent)
}));
console.log(test)

exports.handler = handler