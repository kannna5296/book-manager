import { setupWorker } from "msw";
import { handlers } from "./handlers";
import { index } from "./learn/index";
import { register } from "./learn/register";

export const worker = setupWorker(...handlers, index, register);
