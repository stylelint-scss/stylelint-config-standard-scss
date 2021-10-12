"use strict";

const config = require("../");
const fs = require("fs");
const stylelint = require("stylelint");

const validCss = fs.readFileSync("./__tests__/css-valid.css", "utf-8");
const invalidCss = fs.readFileSync("./__tests__/css-invalid.css", "utf-8");
const validScss = fs.readFileSync("./__tests__/scss-valid.scss", "utf-8");
const invalidScss = fs.readFileSync("./__tests__/scss-invalid.scss", "utf-8");

describe("flags no warnings with valid css", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config
    });
  });

  it("did not error", () => {
    return result.then(data => expect(data.errored).toBeFalsy());
  });

  it("flags no warnings", () => {
    return result.then(data =>
      expect(data.results[0].warnings).toHaveLength(0)
    );
  });
});

describe("flags no warnings with valid scss", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validScss,
      config,
      syntax: "scss",
    });
  });

  it("did not error", () => {
    return result.then(data => expect(data.errored).toBeFalsy());
  });

  it("flags no warnings", () => {
    return result.then(data =>
      expect(data.results[0].warnings).toHaveLength(0)
    );
  });
});

describe("flags warnings with invalid css", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config
    });
  });

  it("did error", () => {
    return result.then(data => expect(data.errored).toBeTruthy());
  });

  it("flags one warning", () => {
    return result.then(data =>
      expect(data.results[0].warnings).toHaveLength(1)
    );
  });

  it("correct warning text", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].text).toBe(
        'Expected quotes (function-url-quotes)'
      )
    );
  });

  it("correct rule flagged", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].rule).toBe("function-url-quotes")
    );
  });

  it("correct severity flagged", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].severity).toBe("error")
    );
  });

  it("correct line number", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].line).toBe(2)
    );
  });

  it("correct column number", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].column).toBe(19)
    );
  });
});

describe("flags warnings with invalid scss", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidScss,
      config,
      syntax: "scss",
    });
  });

  it("did error", () => {
    return result.then(data => expect(data.errored).toBeTruthy());
  });

  it("flags one warning", () => {
    return result.then(data =>
      expect(data.results[0].warnings).toHaveLength(1)
    );
  });

  it("correct warning text", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].text).toBe(
        'Expected $ variable name to match specified pattern (scss/dollar-variable-pattern)'
      )
    );
  });

  it("correct rule flagged", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].rule).toBe("scss/dollar-variable-pattern")
    );
  });

  it("correct severity flagged", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].severity).toBe("error")
    );
  });

  it("correct line number", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].line).toBe(1)
    );
  });

  it("correct column number", () => {
    return result.then(data =>
      expect(data.results[0].warnings[0].column).toBe(1)
    );
  });
});
