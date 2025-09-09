import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

export default [
    // Build JS (CJS + ESM)
    {
        input: "src/index.ts",
        output: [
            { file: "dist/index.cjs.js", format: "cjs", sourcemap: true },
            { file: "dist/index.esm.js", format: "esm", sourcemap: true },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                declaration: true,
                declarationDir: "dist/types",
                rootDir: "src",
            }),
        ],
        external: ["react", "react-dom"],
    },

    // Build Type Declarations
    {
        input: "dist/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
];
