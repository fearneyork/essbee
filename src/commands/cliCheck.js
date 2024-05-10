import inquirer from "inquirer";
import subProcess from "child_process";
import ora from "ora";
import authCheck from "./authCheck.js";
import { log } from "console";

export default async function cliCheck() {
  let isInstalled = false;

  subProcess.exec(`which storyblok`, (error, stdout, stderr) => {
    const spinner = ora("Checking for storyblok-cli...").start();
    spinner.spinner = "clock";
    if (error) {
      log(error);
      spinner.fail("Storyblok CLI not found.");
    }
    if (stdout) {
      log(stdout);
      spinner.succeed("Storyblok CLI found.");
      isInstalled = true;
    }
  });

  setTimeout(() => {
    !isInstalled &&
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "install",
            message: "Would you like to globally install the storyblok-cli?",
            default: true,
          },
        ])
        .then(({ install }) => {
          if (!install) {
            log("Please install the storyblok-cli to continue.");
            process.exit(1);
          }
          if (install) {
            subProcess.exec(`npm i storyblok -g`, (error, stdout, stderr) => {
              const spinner = ora("Installing storyblok-cli...").start();
              spinner.spinner = "clock";
              if (error) {
                spinner.fail("Failed to install storyblok-cli.");
                process.exit(1);
              }
              spinner.succeed("Storyblok CLI installed.");
            });
          }
        });

    isInstalled && authCheck();
  }, 1000);
}
