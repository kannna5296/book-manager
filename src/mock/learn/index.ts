import { rest } from "msw";
import { createMockEndpoint } from "../create-mock-url";
import { LearnedIndexResponse } from "../../repositories/generated";

const responseList: LearnedIndexResponse[] = [
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHT",
    date: "2023-01-01",
    bookName: "走ることについて語るときに僕の語ること",
    learnedList: [
      "小説書きとランニングは似ている",
      "小説に限らず、物事を継続するには体調が大事",
      "ランニングは何度やっても慣れない",
    ],
  },
  {
    id: "01H75MAQSCQCBJ5MQJHYWZ5KHA",
    date: "2023-02-01",
    bookName: "マネジメントキャリアパス",
    learnedList: [
      "設計背景を説明することは有用",
      "新規参画者に慣れてもらうには時間がかかる",
      "XXXX",
    ],
  },
];

export const index = rest.get(
  createMockEndpoint("/learned"),
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(responseList));
  }
);
