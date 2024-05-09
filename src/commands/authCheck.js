import ora from "ora";
import subProcess from "child_process";
import chalk from "chalk";
import inquirer from "inquirer";

//use subProcess to handle shell commands from node
// TODO: extract out the auth email at the end, maybe split on space and take last index
//
function ssoSignIn() {
  inquirer
    .prompt([
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
    ])
    .then(({ signIn, pat }) => {
      if (signIn) {
        const spinner = ora("Signing in to Storyblok").start();
        spinner.color = "yellow";
        subProcess.exec(
          `storyblok login --token ${pat} --region eu`,
          (error) => {
            if (error) {
              console.error(error);
              process.exit(1);
            }
            spinner.succeed("Successfully signed in to Storyblok");
          },
        );
      }
    })
    .complete();
}

export async function authCheck() {
  const spinner = ora("Checking your storyblok-cli auth status").start();
  spinner.color = "yellow";

  subProcess.exec(`storyblok user`, (error, stdout, stderr) => {
    const emailRegex = new RegExp(/\b[\w\.-]+@cinch\.\w{2,4}\b/gi);
    try {
      const email = stdout.toString().split(" ").slice(-1)[0];
      if (email.match(emailRegex)) {
        spinner.succeed(`Storyblok user logged in as: ${chalk.green(email)}`);
      } else {
        spinner.fail(`Storyblok user not logged in.`);
        ssoSignIn();
      }
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });
}
