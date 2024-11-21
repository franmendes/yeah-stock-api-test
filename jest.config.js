const { default: test } = require("node:test");

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
  verbose: true,
  forceExit: true,
  cleanMocks: true,
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
