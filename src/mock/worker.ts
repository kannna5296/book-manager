import { setupWorker } from "msw";
import { handlers } from "./handlers";
import { index } from "./learn/index";

export const worker = setupWorker(...handlers, index);
