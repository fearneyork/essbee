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
}
