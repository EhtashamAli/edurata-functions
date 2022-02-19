const tsj = require("ts-json-schema-generator");
const fs = require("fs");
import type {TypescriptFile, OasFile} from "@edurata/types"
/** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
const config = {
    path: "interface.d.ts",
    type: "*", // Or <type-name> if you want to generate schema for that one type only
};
const test: TypescriptFile = {
    path:"",
    fileName: "",
    fileType: "ts"
}

const output_path = "output.json";

const schema = tsj.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
fs.writeFile(output_path, schemaString, (err) => {
    if (err) throw err;
});