import { setupWorker } from "msw";
import { index } from "./learn/index";
import { register } from "./learn/register";

export const worker = setupWorker(index, register);
