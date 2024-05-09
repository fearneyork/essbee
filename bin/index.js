#!/usr/bin/env node

import { authCheck } from "../src/commands/authCheck.js";
import { greet } from "../src/commands/greet.js";
import { runCommand } from "../src/commands/runCommand.js";

//TODO: convert to TypeScript
greet();
authCheck();
runCommand();
