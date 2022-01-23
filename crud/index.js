
class ApiCall {
    constructor(inputStringFormat, outputStringFormat) {
        this.inputStringFormat = inputStringFormat
        this.outputStringFormat = outputStringFormat
    }

    convert = (inputString) => {
        return Buffer.from(inputString, this.inputStringFormat).toString(this.outputStringFormat);
    }
}


exports.handler = async (event, context, callback) => {
    const converter = new Converter(...event.config)
    const {input} = event
    if (typeof input === "array") {
        return input.map(converter.run)
    }
    return converter.run(input)
};
  