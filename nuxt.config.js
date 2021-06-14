export default {
  target: "static",
  head: {
    title: "firebase-beta-9-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  plugins: ["~/plugins/firebase.js"],

  components: true,

  buildModules: [],

  modules: [],

  build: {},
};
