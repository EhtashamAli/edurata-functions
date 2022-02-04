import {Handler} from "./types";

export const handler: Handler = async (inputs) => {
    const convert = (inputString) => {
        return Buffer.from(inputString, inputs.inputStringFormat).toString(inputs.outputStringFormat);
    }
    if (Array.isArray(inputs.inputString)) {
        return inputs.inputString.map((inputString) => convert(inputString))
    }
    return convert(inputs.inputString)
};
