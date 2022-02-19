const { Handler } = require("./types.d");
const { exec } = require("child_process");
// const {SaveFile} = require("@edurata/internals")
const handler = async (inputs) => {
    exec("npx ts-auto-guard ./opt/files.d.ts --export-all", (error, stdout, stderr) => {
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
    return {};
};
handler();
