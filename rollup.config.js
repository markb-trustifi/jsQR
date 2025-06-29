import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/jsQR.mjs',
        format: 'esm',
        interop: false,
        sourcemap: true,
    },
    plugins: [
        typescript()
    ]
};
