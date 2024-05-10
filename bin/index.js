#!/usr/bin/env node

import cliCheck from "../src/commands/cliCheck.js";
import greet from "../src/commands/greet.js";

async function run() {
  greet();
  cliCheck();
}

run();
