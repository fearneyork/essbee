import ora from "ora";
import subProcess from "child_process";

export async function authCheck() {
  const spinner = ora("Checking your storyblok-cli auth status").start();

  // Test for seeing what the spinner looks like
  // TODO: replace timeout with actual auth check
  setTimeout(() => {
    spinner.color = "yellow";
    spinner.text = "Loading rainbows";
    return spinner.succeed("Storyblok-cli auth status is good!");
  }, 1000);

  //use subProcess to handle shell commands from node
  // TODO: extract out the auth email at the end, maybe split on space and take last index
  subProcess.exec("storyblok user", (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      process.exit(1);
    } else {
      console.log(`The stdout Buffer from shell: ${stdout.toString()}`);
      console.log(`The stderr Buffer from shell: ${stderr.toString()}`);
    }
  });
}
