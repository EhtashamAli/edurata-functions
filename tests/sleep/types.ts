export type Inputs = {
    sleepTimeMs: number,
    file?: string
}

export type Outputs = {
    sleepTimeMs: number,
    file?: string
}

export type Handler = (inputs: Inputs, outputs: Outputs) => Promise<number>
