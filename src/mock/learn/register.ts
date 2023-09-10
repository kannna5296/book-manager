import { rest } from "msw";
import { createMockEndpoint } from "../create-mock-url";
import { LearnedRegisterResponse } from "../../repositories/generated";

const response: LearnedRegisterResponse = {
  id: "01H75MAQSCQCBJ5MQJHYWZ5KHT",
  date: "2023-01-07",
  content: "最悪売れなくてもいいから個人開発はなんかまず一個作れ",
};

export const register = rest.post(
  createMockEndpoint("/learned"),
  (_req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(response));
  }
);
