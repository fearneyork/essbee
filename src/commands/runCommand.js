import inquirer from "inquirer";
import chalk from "chalk";
import pullComponents from "./pullComponents.js";
import clean from "./clean.js";
import pushComponents from "./pushComponents.js";

const prompts = [
  {
    type: "list",
    name: "whichCommand",
    message: "What would you like to do?",
    choices: [
      { name: "pull components", value: "pull-components" },
      { name: "push components", value: "push-components" },
      { name: `${chalk.red("clean up temp directory")}`, value: "clean" },
    ],
  },
  {
    type: "list",
    name: "whichSpace",
    message: "Which space would you like to pull components from?",
    choices: [
      { name: "dev", value: "132543" },
      { name: "prod", value: "143588" },
    ],
    when: (answers) => answers.whichCommand === "pull-components",
  },
  {
    type: "confirm",
    name: "isSeparateFiles",
    message: "Would you like to pull components into separate files?",
    when: (answers) => answers.whichCommand === "pull-components",
  },
  {
    type: "confirm",
    name: "clean",
    message: `This cannot be undone. ${chalk.red("Are you sure?")}`,
    when: (answers) => answers.whichCommand === "clean",
  },
];

export async function runCommand() {
  inquirer
    .prompt(prompts)
    .then(({ whichCommand, whichSpace, isSeparateFiles }) => {
      if (whichCommand === "pull-components")
        pullComponents(whichSpace, isSeparateFiles);
      if (whichCommand === "push-components") pushComponents();
      if (whichCommand === "clean") clean();
    });
}
