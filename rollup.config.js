import typescript from "@rollup/plugin-typescript";

export default {
  input:"./src/index.ts",
  output: [
    {
      format: "cjs",
      file: "./lib/guide-mini-vue.cjs.js",
    },
    {
      name: "vue",
      format: "es",
      file: "./lib/guide-mini-vue.esm.js",
    },
  ],
  plugins:[
    typescript()
  ]
};
