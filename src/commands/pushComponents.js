import inquirer from "inquirer";
import subProcess from "child_process";

export default async function pushComponents() {
  let componentDir;
  const dirsArr = [];

  subProcess.exec(
    `ls ~/Desktop/temp_storyblok_cli`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }
      dirsArr.push(...stdout.toString().split("\n").slice(0, -1));
    },
  );

  // console.log(dirsArr);
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
        //TODO: create inquirer-search-list from selected directory
        console.log(whichDir);
      });
  }, 1000);
}
