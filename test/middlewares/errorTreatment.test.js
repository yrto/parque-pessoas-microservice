const errorTreatmentMiddleware = require("../../src/middlewares/errorTreatment");

test("Middleware de tratamento de erros retorna nulo", () => {
  expect(
    errorTreatmentMiddleware({}, null, {
      status: () => ({
        send: () => {},
      }),
    })
  ).toBe(undefined);
});
