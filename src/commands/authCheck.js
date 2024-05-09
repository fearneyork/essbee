import ora from "ora";
import subProcess from "child_process";
import chalk from "chalk";

//use subProcess to handle shell commands from node
// TODO: extract out the auth email at the end, maybe split on space and take last index

export async function authCheck() {
  const log = console.log;
  const spinner = ora("Checking your storyblok-cli auth status").start();
  spinner.color = "yellow";
  spinner.text = "Loading rainbows";

  subProcess.exec(`storyblok user`, (error, stdout, stderr) => {
    const emailRegex = new RegExp(/\b[\w\.-]+@cinch\.\w{2,4}\b/gi);
    try {
      const email = stdout.toString().split(" ").slice(-1)[0];
      if (email.match(emailRegex))
        spinner.succeed(`Storyblok user logged in as: ${chalk.green(email)}`);
      else
        spinner.fail(
          `Storyblok user not logged in. Please run ${chalk.magenta("storyblok login")} to authenticate through cinch storyblok space with SSO.`,
        );
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });
}
