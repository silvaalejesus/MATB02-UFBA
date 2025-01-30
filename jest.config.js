/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // or '<rootDir>/path/to/your/transformer.js' if you have a custom transformer
    },
    collectCoverage: true, // Habilita a coleta de cobertura
    coverageReporters: ["lcov", "text", "json", "html"], // Define os formatos de relatório
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
      // This is required for older versions of JSDOM
      resources: "usable",
    },
    moduleNameMapper: {
      "^axios$": "<rootDir>/node_modules/axios/dist/node/axios.cjs", // Absolute path (often works best)
      "^axios$": "axios/dist/node/axios.cjs", // Relative path (should also work)
      "^axios$": "axios", // If you are not using ESM in your tests, you can simply use this
    },
  };
};
