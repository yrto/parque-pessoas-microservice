const isAuthValid = require("../../src/services/isAuthValid");
const axios = require("axios");
const logger = require("../../src/services/logger");

jest.mock("axios");
jest.mock("../../src/services/logger", () => {
  return { error: jest.fn() };
});

describe("Serviço de autenticação", () => {
  it("retorna true", async () => {
    axios.post.mockResolvedValueOnce({ data: { role: "peasant" } });
    const res = await isAuthValid();
    expect(res).toBe(true);
  });

  it("retorna false", async () => {
    axios.post.mockResolvedValueOnce({ data: { role: null } });
    const res = await isAuthValid();
    expect(res).toBe(false);
  });

  it("retorna erro", async () => {
    const errorMessage = "invalid token";
    axios.post.mockRejectedValueOnce(new Error(errorMessage));
    await expect(isAuthValid()).resolves.toBe(false);
    expect(logger.error).toHaveBeenCalled();
  });
});
