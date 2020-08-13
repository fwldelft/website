module.exports = {
  plugins: [
    "postcss-preset-env",
    process.env.NODE_ENV === "production" ? "cssnano" : null,
  ].filter((p) => p),
}
