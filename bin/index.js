#!/usr/bin/env node

import { authCheck } from "../src/commands/authCheck.js";
import { greet } from "../src/commands/greet.js";
import inquirer from "inquirer";

//TODO: convert to TypeScript
greet();
authCheck();

// const answer = await select({
//   message: "Select a package manager",
//   choices: [
//     {
//       name: "npm",
//       value: "npm",
//       description: "npm is the most popular package manager",
//     },
//     {
//       name: "yarn",
//       value: "yarn",
//       description: "yarn is an awesome package manager",
//     },
//     new Separator(),
//     {
//       name: "jspm",
//       value: "jspm",
//       disabled: true,
//     },
//     {
//       name: "pnpm",
//       value: "pnpm",
//       disabled: "(pnpm is not available)",
//     },
//   ],
// });
// inquirer.prompt([
//   {
//     type: "confirm",
//     name: "signIn",
//     message: "Would you like to sign in to your storyblok account?",
//   },
//   {
//     type: "input",
//     name: "pat",
//     message: "Please enter your Storyblok personal access token",
//     when: (answers) => answers.signIn,
//   },
// ]);
