#!/usr/bin/env node

// import authCheck from "../src/commands/authCheck.js";
import cliCheck from "../src/commands/cliCheck.js";
import greet from "../src/commands/greet.js";

async function run() {
  greet();
  cliCheck();
}

run();
