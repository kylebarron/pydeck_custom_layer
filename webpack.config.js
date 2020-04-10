module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js",
    library: "LabeledGeoJsonLayerLibrary",
    libraryTarget: "amd-require"
  },
  entry: "./index.js"
};
