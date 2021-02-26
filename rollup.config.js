import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "@rollup/plugin-typescript";
import {terser} from "rollup-plugin-terser";
import cleanup from 'rollup-plugin-cleanup';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/polymer-elements.js',
        format: 'iife',
        name: 'polymerElements'
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs(),
        cleanup({comments: 'none'}),
        terser()
    ]
};
