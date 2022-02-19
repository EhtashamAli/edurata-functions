/*
 * Generated type guards for "files.d.ts".
 * WARNING: Do not manually change this file.
 */
import { ArtefactFileStr, ArtefactFile, TypescriptFile } from "./files";

export function isArtefactFileStr(obj: any, _argumentName?: string): obj is ArtefactFileStr {
    return (
        typeof obj === "`file:${string}`"
    )
}

export function isArtefactFile(obj: any, _argumentName?: string): obj is ArtefactFile {
    return (
        (isArtefactFileStr(obj) as boolean ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.path === "string" &&
            typeof obj.filename === "string" &&
            typeof obj.fileType === "string")
    )
}

export function isTypescriptFile(obj: any, _argumentName?: string): obj is TypescriptFile {
    return (
        (isArtefactFileStr(obj) as boolean &&
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            obj.fileType === "ts" ||
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            typeof obj.path === "string" &&
            typeof obj.filename === "string" &&
            typeof obj.fileType === "string" &&
            (obj !== null &&
                typeof obj === "object" ||
                typeof obj === "function") &&
            obj.fileType === "ts")
    )
}
