import inquirer from "inquirer";
// import ora from "ora";

export async function runCommand() {
  console.log("runCommand");

  inquirer
    .prompt([
      {
        type: "list",
        name: "whichCommand",
        message: "What would you like to do?",
        choices: ["Pull components from a storyblok space", "abc", "xyz"],
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
}
