import {TypescriptFile} = "@edurata/files"

type Inputs = {
    openApiSchema: any,
}

type Outputs = {
    edufcFile: TypescriptFile,
}

export type Handler = (inputs: Inputs) => Promise<Outputs>
