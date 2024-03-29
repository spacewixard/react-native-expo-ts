module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      // Required for expo-router
      require.resolve("expo-router/babel"),
    ],
  };
};
