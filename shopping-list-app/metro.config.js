const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// Remove "svg" from assetExts and add it to sourceExts
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== "svg");
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, "svg"];

module.exports = defaultConfig;
