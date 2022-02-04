type StringFormat = "utf8" | "hex" | "base64"

type InputsSingle = {
    inputStringFormat: StringFormat
    outputStringFormat: StringFormat
    inputString: string
}

type InputsMultiple = {
    inputStringFormat: StringFormat,
    outputStringFormat: StringFormat
    inputString: [string]
}

type OutputsSingle = {
    outputString: string
}

type OutputsMultiple = {
    outputString: [string]
}

export type Handler = {
    (inputs: InputsMultiple): Promise<OutputsMultiple>
    (inputs: InputsSingle): Promise<OutputsSingle>
}
