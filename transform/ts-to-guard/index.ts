import type {Handler} from "./interface.d";
const { exec } = require("child_process");
// const {SaveFile} = require("@edurata/internals")

const handler: Handler = async (inputs) => {
    exec(`npx ts-auto-guard /tmp/${inputs.typesFile.path} --export-all`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    return {
        guardsFile: ""
    }
};

handler()