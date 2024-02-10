import { rest } from "msw";
import { createMockEndpoint } from "../create-mock-url";
import { BookSearchResponse } from "../../repositories/generated";

const responseList: BookSearchResponse[] = [
  {
    id: "1",
    name: "hoge1",
    author: "author1",
  },
  {
    id: "2",
    name: "hoge2",
    author: "author2",
  },
  {
    id: "3",
    name: "hoge2",
    author: "author2",
  },
];

export const index = rest.get(
  createMockEndpoint("/learned"),
  (_req, res, ctx) => {
    return res(ctx.delay(500), ctx.status(200), ctx.json(responseList));
  }
);
