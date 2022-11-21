import { LanguageId } from "src/main";

export const DISPLAY_NAMES: Record<LanguageId, string> = {
    cpp: "C++",
    cs: "C#",
    go: "Golang",
    groovy: "Groovy",
    haskell: "Haskell",
    java: "Java",
    js: "Javascript",
    kotlin: "Kotlin",
    lua: "Lua",
    mathematica: "Mathematica",
    powershell: "Powershell",
    prolog: "Prolog",
    python: "Python",
    r: "R",
    rust: "Rust",
    shell: "Shell",
    ts: "Typescript",
    scala: "Scala",
    fsharp: "F#",
    c: "C"
} as const;