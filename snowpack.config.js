const paths = {
  out: "dist",
};

const copyAlpineJs = `mkdir -p ${paths.out}/js && cp node_modules/alpinejs/dist/alpine.js ${paths.out}/js/alpine.js`;

module.exports = {
  mount: {
    _site: "/",
    static: "/",
    // also mount out dir to serve `/js/alpine.js` in dev mode
    [paths.out]: "/",
  },
  plugins: [
    "@snowpack/plugin-optimize",
    "@snowpack/plugin-postcss",
    ["@snowpack/plugin-run-script", { cmd: "eleventy", watch: "$1 --watch" }],
    ["@snowpack/plugin-run-script", { cmd: copyAlpineJs }],
  ],
  devOptions: {
    port: 3000,
    open: "none",
    hmr: true,
    hmrDelay: 300,
  },
  buildOptions: {
    out: paths.out,
  },
};
