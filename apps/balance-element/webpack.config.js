// This file is needed because Nx's option "runtimeChunk": false is buggy right now. This will be fixed and the file can be removed!

module.exports = function (baseConfig) {
  baseConfig.optimization.runtimeChunk = false;
  return baseConfig;
};
