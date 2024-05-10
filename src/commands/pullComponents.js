import subProcess from "child_process";
import ora from "ora";
import { format } from "date-fns";

export default async function pullComponents(spaceId, isSeparateFiles) {
  const sfFlag = isSeparateFiles ? "--separate-files" : "";
  const devOrProd = spaceId === "132543" ? "dev" : "prod";
  const sbCommand = `storyblok pull-components --space ${spaceId} ${sfFlag}`;
  const timestamp = format(Date.now(), "dd-mm-yyyy_hh-mm-ss");

  subProcess.exec(
    `cd ~/Desktop && mkdir -p temp_storyblok_cli/${devOrProd}_${timestamp}`,
    (error, stdout, stderr) => {
      const spinner = ora("Making directory...").start();
      spinner.spinner = "clock";
      if (error) {
        console.error(error);
        process.exit(1);
      }
      spinner.succeed(`Directory created.`);
    },
  );
  setTimeout(() => {
    subProcess.exec(
      `cd ~/Desktop/temp_storyblok_cli/${devOrProd}_${timestamp} && ${sbCommand}`,
      (error, stdout, stderr) => {
        const spinner = ora("Pulling component JSON...").start();
        spinner.spinner = "clock";
        if (error) {
          console.error(error);
          process.exit(1);
        }
        spinner.succeed(
          `Components pulled. Find them in ~/Desktop/temp_storyblok_cli/${devOrProd}_${timestamp}`,
        );
      },
    );
  }, 1500);
}
