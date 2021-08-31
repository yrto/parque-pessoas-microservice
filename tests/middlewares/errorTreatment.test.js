jest.mock("../../src/services/logger", () => {
  return {
    error: jest.fn(),
  };
});

const errorTreatmentMiddleware = require("../../src/middlewares/errorTreatment");
const { ValidationError } = require("express-validation");

describe("Middleware de tratamento de erros", () => {
  it("Identifica erros ValidationError", () => {
    const resMock = {};
    const errMock = new ValidationError("error", {
      statusCode: 400,
    });

    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.send = jest.fn();
    resMock.json = jest.fn();

    errorTreatmentMiddleware(errMock, null, resMock, null);

    expect(resMock.status.mock.calls.length).toBe(1);
    expect(resMock.status.mock.calls[0][0]).toBe(400);
  });

  it("Identifica erros comuns", () => {
    const resMock = {};
    const errMock = { message: "fake error" };

    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.send = jest.fn();
    resMock.json = jest.fn();

    errorTreatmentMiddleware(errMock, null, resMock, null);

    expect(resMock.status.mock.calls.length).toBe(1);
    expect(resMock.status.mock.calls[0][0]).toBe(500);
  });

  it("Loga o erro", () => {
    const logger = require("../../src/services/logger");
    const resMock = {};
    const errMock = {};

    resMock.status = jest.fn().mockReturnValue(resMock);
    resMock.send = jest.fn();
    resMock.json = jest.fn();

    errorTreatmentMiddleware(errMock, null, resMock, null);

    expect(logger.error).toHaveBeenCalled();
  });
});
