import {OpenAPIV3} from "openapi-types"
type ArtefactFileStr = `file:${string}`

export type ArtefactFile = {
    test: OpenAPIV3.ArraySchemaObject
    path: string // e.g. /path/to/file/
    filename: string
    fileType: string
} | ArtefactFileStr

export type TypescriptFile = ArtefactFile & {
    fileType: "ts"
}