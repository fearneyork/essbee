import inquirer from "inquirer";

export async function runCommand() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "whichCommand",
        message: "What would you like to do?",
        choices: [
          { name: "pull components", value: "pull-components" },
          { name: "abc", value: "abc" },
          { name: "xyz", value: "xyz" },
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
    ])
    .then(({ whichCommand, whichSpace }) => {
      if (whichCommand === "pull-components")
        console.log(`Pulling components from ${whichSpace}`);
      if (whichCommand === "abc") console.log("abc");
      if (whichCommand === "xyz") console.log("xyz");
    });
}
