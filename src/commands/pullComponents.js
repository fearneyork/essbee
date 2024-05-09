import subProcess from "child_process";

export default async function pullComponents(spaceId, isSeparateFiles) {
  console.log(
    `Pulling components from ${spaceId} and separate files is ${isSeparateFiles}...`,
  );
  const sfFlag = isSeparateFiles ? "--separate-files" : "";
  const sbCommand = `storyblok pull-components --space ${spaceId} ${sfFlag}`;
  console.log(sbCommand);

  //TODO: add check in for if temp_storyblok_cli exists, if it does advise user to clean it up

  //TODO: add spinner in on wait for command to finish
  subProcess.exec(
    `cd ~/Desktop && ls -a && mkdir temp_storyblok_cli && cd temp_storyblok_cli && ${sbCommand}`,
    (error, stdout, stderr) => {
      console.log(stdout);
    },
  );
}
