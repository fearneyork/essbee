#!/usr/bin/env node

import { authCheck } from "../src/commands/authCheck.js";
import { greet } from "../src/commands/greet.js";

greet();
authCheck();
