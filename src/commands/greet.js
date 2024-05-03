import { userInfo } from "os";
import chalk from "chalk";
import inquirer from "inquirer";

const log = console.log;
const sbLogo = `
 _____________
|  _______    |
| |   __  \\   |
| |  |__) /   |
| |   ___  \\  |
| |  |___)  | |
| |________/  |
|_  __________|
  |/`;

export async function greet() {
  const user = userInfo().username;

  log(chalk.cyan(sbLogo));
  log("Hello,", chalk.yellow(`${user}!`), "Welcome to the A&E Storyblok CLI!");
  try {
    const action = await inquirer.prompt([
      {
        name: `name`,
        message: `What's your name?`,
        type: "input",
        default: user,
      },
    ]);
    return action;
  } catch (error) {
    log(chalk.red("Something went wrong... \n", error));
  }
}
