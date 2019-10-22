const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

const tsPathsMapper = pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" });

// spell-checker: ignore webm

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    // or should it be pathsToModuleNameMapper
    moduleNameMapper: {
        ...tsPathsMapper,
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|dae)$":
            "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "<rootDir>/src/__mocks__/styleMock.js"
    }
};
