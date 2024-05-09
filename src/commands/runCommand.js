import inquirer from "inquirer";
import ora from "ora";

//TODO: figure out why inquirer is only running once
export async function runCommand() {
  // const spinner = ora("Awaiting instruction").start();
  // spinner.color = "yellow";
  const answer = inquirer
    .prompt([
      {
        type: "select",
        name: "whichCommand",
        message: "What would you like to do?",
        choices: ["Pull components from a sotryblok space", "abc", "xyz"],
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
}
