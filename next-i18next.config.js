/** @type {import("next-i18next").UserConfig} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: [
    "en"
    ],
  },
  reloadOnPrerender: process.env.NODE_ENV !== "production",
  localePath: "/Users/mac1/work/Projects/dive-in-next-13-tests/public/static/locales",
};

module.exports = config;

