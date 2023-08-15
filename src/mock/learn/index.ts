import { rest } from "msw";
import { createMockEndpoint } from "../create-mock-url";
import {
  LearnedIndexResponse,
  LearnedResponse,
} from "../../repositories/generated";

const response: LearnedResponse = {
  content: "aaa",
};

const responseList: LearnedIndexResponse = {
  id: "aa",
  date: "2023-01-01",
  bookName: "あああ",
  learnedList: [response],
};

export const index = rest.get(
  createMockEndpoint("/learned"),
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseList));
  }
);
