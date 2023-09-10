import { rest } from "msw";
import { createMockEndpoint } from "../create-mock-url";
import { LearnedIndexResponse } from "../../repositories/generated";

const responseList: LearnedIndexResponse[] = [
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHT",
    date: "2023-01-06",
    content: "最悪売れなくてもいいから個人開発はなんかまず一個作れ",
  },
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHR",
    date: "2023-01-05",
    content:
      "エンジニアチームマネジメントするにも設計力、引き出しの多さが必要(まだ仮説)",
  },
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHR",
    date: "2023-01-04",
    content:
      "疲れた時はNoイヤホンで散歩するに限る。脳が休まるのとアイデアが出てくる",
  },
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHR",
    date: "2023-01-03",
    content: "「いかにしなくて良い作業を決めるか」も仕事のうち",
  },
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHA",
    date: "2023-01-02",
    content: "早めに失敗するが吉",
  },
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHR",
    date: "2023-01-01",
    content: "小説書きとランニングは似ている",
  },
];

export const index = rest.get(
  createMockEndpoint("/learned"),
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseList));
  }
);
