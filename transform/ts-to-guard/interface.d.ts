import {File} from "@edurata/types"
export interface Inputs {
    typesFile: File
}

export interface Outputs {
    guardsFile: string
}

export type Handler = (inputs: Inputs) => Promise<Outputs>
