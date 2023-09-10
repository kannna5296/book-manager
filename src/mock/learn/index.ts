import { rest } from "msw";
import { createMockEndpoint } from "../create-mock-url";
import { LearnedIndexResponse } from "../../repositories/generated";

const responseList: LearnedIndexResponse[] = [
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHT",
    date: "2023-01-01",
    content: "最悪売れなくてもいいから個人開発はなんかまず一個作れ",
  },
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHA",
    date: "2023-01-02",
    content: "早めに失敗するが吉",
  },
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHR",
    date: "2023-01-02",
    content: "小説書きとランニングは似ている",
  },
];

export const index = rest.get(
  createMockEndpoint("/learned"),
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseList));
  }
);
