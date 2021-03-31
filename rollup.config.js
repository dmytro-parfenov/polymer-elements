import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "@rollup/plugin-typescript";
import {terser} from "rollup-plugin-terser";
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy-assets';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/main.js',
        format: 'es'
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        cleanup({comments: 'none'}),
        terser(),
        copy({
            assets: [
                "src/assets",
                "src/package.json",
            ],
        })
    ]
};
