import { rest } from "msw";
import { createMockEndpoint } from "../create-mock-url";
import { BookDetailResponse } from "../../repositories/generated";

const response: BookDetailResponse = {
    id: "1",
    name: "hoge1",
    author: "author1",
    rentals: [{
      userId: "1",
      rentedAt: "2023-01-01"
    },
    {
      userId: "2",
      rentedAt: "2023-02-01"
    }]
};

export const register = rest.post(
  createMockEndpoint("/learned"),
  (_req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(response));
  }
);
