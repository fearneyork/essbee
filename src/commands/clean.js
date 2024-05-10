import ora from "ora";
import subProcess from "child_process";

export default async function clean() {
  const spinner = ora("Cleaning up...").start();
  spinner.spinner = "clock";
  setTimeout(() => {
    subProcess.exec(
      `rm -rf ~/Desktop/temp_storyblok_cli`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(error);
          process.exit(1);
        }
        spinner.succeed(`Cleaned up.`);
      },
    );
  }, 1500);
}
