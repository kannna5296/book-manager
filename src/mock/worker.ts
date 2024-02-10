import { setupWorker } from "msw";
import { index } from "./book/index";
import { register } from "./book/detail";

export const worker = setupWorker(index, register);
