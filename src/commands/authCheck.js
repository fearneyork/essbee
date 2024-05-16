import ora from "ora";
import subProcess from "child_process";
import chalk from "chalk";
import inquirer from "inquirer";
import { runCommand } from "./runCommand.js";

let isAuthed = false;

const getPatPrompt = () =>
  inquirer.prompt([
    {
      type: "confirm",
      name: "signIn",
      message: "Would you like to sign in to your storyblok account?",
      default: true,
    },
    {
      type: "input",
      name: "pat",
      message: "Please enter your Storyblok personal access token",
      when: (answers) => answers.signIn,
    },
  ]);

async function ssoSignIn() {
  await getPatPrompt().then(async ({ signIn, pat }) => {
    const spinner = ora("Signing in to Storyblok").start();
    spinner.spinner = "clock";
    signIn &&
      subProcess.exec(`storyblok login --token ${pat} --region eu`, (error) => {
        if (error) {
          console.error(error);
          process.exit(1);
        }
        spinner.succeed(
          `Successfully signed in to Storyblok. Re-run ${chalk.magenta(`essbee`)} to continue.`,
        );
      });
  });
}

export default async function authCheck() {
  const spinner = ora("Checking your storyblok-cli auth status").start();
  spinner.spinner = "clock";

  subProcess.exec(`storyblok user`, (error, stdout, stderr) => {
    const emailRegex = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi);
    try {
      const email = stdout.toString().split(" ").slice(-1)[0];
      if (email.match(emailRegex)) {
        isAuthed = true;
        spinner.succeed(`Storyblok user logged in as: ${chalk.green(email)}`);
      } else {
        spinner.fail(`Storyblok user not logged in.`);
        ssoSignIn();
      }
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
    spinner.stop();
  });
  // wait for spinner to stop spinning before running the next command
  setTimeout(() => !spinner.isSpinning && isAuthed && runCommand(), "1500");
}
