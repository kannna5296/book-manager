import { rest } from "msw";
import { createMockEndpoint } from "../create-mock-url";
import { BookDetailResponse } from "../../repositories/generated";

const response: BookDetailResponse = {
  id: "1",
  name: "hoge1",
  author: "author1",
  canRental: true,
  rentals: [{
    userId: "1",
    rentedAt: "2023-01-01",
    deadline: "2023-01-08",
    returned: true
  },
  {
    userId: "2",
    rentedAt: "2023-02-01",
    deadline: "2023-02-08",
    returned: true
  }]
};

export const register = rest.get(
  createMockEndpoint("/book/:id"),
  (_req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(response));
  }
);
