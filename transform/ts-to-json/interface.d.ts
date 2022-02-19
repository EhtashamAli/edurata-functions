
import type {TypescriptFile, OasFile, UrlString} from "@edurata/types"
import type {OpenAPIV3} from "openapi-types"

type Inputs = {
    test: OpenAPIV3.ArraySchemaObject
    oasInput: OasFile | UrlString | string
}

type Outputs = {
    file: TypescriptFile
}

export type Handler = {
    (inputs: Inputs): Promise<Outputs>
}
