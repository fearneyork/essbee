import { userInfo } from "os";
import chalk from "chalk";
import { log } from "console";

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

export default async function greet() {
  const user = userInfo().username;

  log(chalk.cyan(sbLogo));
  log(
    "Hello,",
    chalk.yellow(`${user}! 👋`),
    `\nWelcome to the ${chalk.cyan("🐍 essbee 🐝")} CLI!`,
  );
}
