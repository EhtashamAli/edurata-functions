class Converter {
    constructor(inputStringFormat, outputStringFormat) {
        this.inputStringFormat = inputStringFormat
        this.outputStringFormat = outputStringFormat
    }
    /**
     * @param {Object} queryDetails the query, operationName, and variables
     * @param {String} appsyncUrl url of your AppSync API
     */
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
  