export default {
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // The root directory that Jest should scan for tests and modules within
  rootDir: "src",
  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: [".*\\..*spec\\.ts$"],
  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.ts?$": ["@swc/jest"],
  },
};
