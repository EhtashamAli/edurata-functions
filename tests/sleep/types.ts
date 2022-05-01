import {File} from "/opt/files"

export type Inputs = {
    sleepTimeMs: number,
    file?: File
}

export type Outputs = {
    sleepTimeMs: number,
    file?: File
}

export type Handler = (inputs: Inputs) => Promise<Outputs>
