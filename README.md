# essbee

A CLI tool for Storyblok. Built specifically to help with the migration of components from one space to another.

## Installation

This CLI tool is designed to be able to be used from anywhere on your machine. To install it, you can run the following command to install it globally:

```zsh
npm install -g
```

## Usage

This is a CLI tool that can be run from the terminal regardless of directory. To run the tool, simply type the following command in the terminal:

```zsh
essbee
```

This tool assumes that you have a Storyblok account and have access to the spaces you are trying to migrate components from and to. It also assumes that you already have the storyblok-cli working on your machine, (i.e. installed and authed through SSO by providing your PAT from [Storyblok](https://app.storyblok.com/#/me/account?tab=token).)

However if you don't have the CLI installed this wrapper will check and install it for you if you wish. This tool will also check if you are authed and if not will prompt you to do so using by providing your PAT from [Storyblok](https://app.storyblok.com/#/me/account?tab=token).

### greet

This is the initial message that will be displayed when you run the CLI tool.
I love a little bit of ASCII art, so I have included a message to greet you.

### cliCheck

This is the check to see if the CLI is installed.
If it is not, it will prompt you to install it.
If it is, if will show a success message of `✔ Storyblok CLI found.`.

### authCheck

This is the check to see if you are authed with the `storyblok-cli`.
If you are not, it will prompt you to auth using your PAT.
If you are, if will show a success message of `✔ Storyblok user logged in as: joe.bloggs@cinch.co.uk`.

### runCommand

This is the [inquirer.js](https://www.npmjs.com/package/inquirer#question) handler for what operation you would like to run.
the options are:

#### pull components

This will pull all components from the source space you specify (either dev or prod), and save them optionally to one large or separate JSON files.

These files will be saved to the `~/Desktop/temp_storyblok_cli` directory at a subdirectory of `<space>_<date-timestamp>`, e.g. `dev_10-05-2024_12-00-00`.

#### clean up temp directory

This will help you clean up the temp files that are created when pulling components.

## Limitations

At the moment, this tool will prompt you to build up your request by following the UI. In future, I may build out functionaly to allow you to pass in flags to the initial command to skip the UI and go straight to the migration process.

This was built as a POC, and therefore has not been tested on all possible scenarios. If you find a bug, please raise an PR or talk to me ([Fearne](https://github.com/fearneyork)).

## Security

This tool does not store any of your data. It simply wraps the Storyblok CLI to make requests to the Storyblok API on your behalf, in a slightly more user-friendly way.
