import inquirer from "inquirer";
import subProcess from "child_process";
import ora from "ora";

export default async function pushComponents() {
  const tempDir = "~/Desktop/temp_storyblok_cli";
  const dirsArr = [];
  const componentArr = [];

  subProcess.exec(`ls ${tempDir}`, (error, stdout, stderr) => {
    const isDirAvailable = !stderr.includes("No such file or directory");
    if (stderr && !isDirAvailable) {
      console.error("No such file or directory. Please pull components first.");
      process.exit(1);
    }
    dirsArr.push(...stdout.toString().split("\n").slice(0, -1));
  });

  setTimeout(() => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "whichDir",
          message: "Which directory would you like to push components from?",
          choices: dirsArr,
        },
      ])
      .then(({ whichDir }) => {
        subProcess.exec(
          `cd ${tempDir}/${whichDir} && ls -a`,
          (error, stdout, stderr) => {
            if (error) {
              console.error(error);
              process.exit(1);
            }
            componentArr.push(...stdout.toString().split("\n").slice(2));
          },
        );
        setTimeout(() => {
          inquirer
            .prompt([
              {
                type: "checkbox",
                name: "whichComponents",
                message: "Which components would you like to push?",
                choices: componentArr,
              },
            ])
            .then(({ whichComponents }) => {
              if (whichComponents.length === 0) {
                console.error(
                  "No components selected. Please select at least one component to push.",
                );
                process.exit(1);
              }
              setTimeout(() => {
                inquirer
                  .prompt([
                    {
                      type: "list",
                      name: "whichSpace",
                      message:
                        "Which space would you like to pull components from?",
                      choices: [
                        { name: "dev", value: "132543" },
                        { name: "prod", value: "143588" },
                      ],
                    },
                  ])
                  .then(({ whichSpace }) => {
                    subProcess.exec(
                      `cd ${tempDir}/${whichDir} && storyblok push-components ${whichComponents.join(",")} --space=${whichSpace}`,
                      (error) => {
                        const spinner = ora("Pushing components...").start();
                        spinner.spinner = "clock";
                        if (error) {
                          console.error(error);
                          process.exit(1);
                        }
                        spinner.succeed("Components pushed successfully!");
                      },
                    );
                  });
              }, 1500);
            });
        }, 1500);
      });
  }, 1000);
}
