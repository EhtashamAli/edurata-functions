
import type {TypescriptFile, OasFile, UrlString} from "@edurata/types"

type Inputs = {
    oasInput: OasFile | UrlString | string
}

type Outputs = {
    file: TypescriptFile
}

export type Handler = {
    (inputs: Inputs): Promise<Outputs>
}
