#!/usr/bin/env node

import { authCheck } from "../src/commands/authCheck.js";
import { greet } from "../src/commands/greet.js";

//TODO: convert to TypeScript

async function run() {
  greet();
  authCheck();
}

run();
