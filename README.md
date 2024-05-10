# storyblok-cli

A CLI tool for Storyblok. Built specifically to help with the migration of components from one space to another.

## Installation

```zsh
npm i
```

## Usage

This is a CLI tool that can be run from the terminal regardless of directory. To run the tool, simply type the following command in the terminal:

```zsh
sbCli
```

This tool assumes that you have a Storyblok account and have access to the spaces you are trying to migrate components from and to. It also assumes that you already have the storyblok-cli working on your machine, (i.e. installed and authed through SSO by providing your PAT from [Storyblok](https://app.storyblok.com/#/me/account?tab=token).)

However if you don't have the CLI installed this wrapper will check and install it for you if you wish. This tool will also check if you are authed and if not will prompt you to do so using by providing your PAT from [Storyblok](https://app.storyblok.com/#/me/account?tab=token).

## Limitations

At the moment, this tool will prompt you to build up your request by following the UI. In future, I may build out functionaly to allow you to pass in flags to the initial command to skip the UI and go straight to the migration process.
