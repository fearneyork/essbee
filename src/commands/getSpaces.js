import ora from "ora";
import subProcess from "child_process";

export default async function getSpaces() {
  const spinner = ora("Fetching spaces...").start();
  spinner.spinner = "clock";
  const spacesArr = [];
  setTimeout(() => {
    subProcess.exec("storyblok spaces", (error, stdout, stderr) => {
      if (error) {
        spinner.fail("Failed to fetch spaces.");
        process.exit(1);
      }
      const output = stdout
        .toString()
        .split("\n")
        .filter((line) => line.includes("id"))
        .map((space) => {
          const replaced = space
            .replace("    ", "")
            .replace(" (id: ", ",")
            .replace(")", "")
            .split(",");

          return { name: replaced[0], value: replaced[1] };
        });
      spacesArr.push(output);
      spinner.succeed("Spaces fetched successfully!");
    });
    console.log(spacesArr);
    return spacesArr;
  }, 1500);
  // return spacesArr;
}

getSpaces();
