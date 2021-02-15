#!/usr/bin/env node

const chalk = require("chalk");
const program = require("commander");
const inquirer = require("inquirer");
const commands = require("../config/commands");
const questions = require("../config/questions");
const packageData = require("../package.json");
const templates = require("../template");
const initTemplateDefault = require("../utils/initTemplateDefault");
const parseParams = require("../utils/parseParam");
initOptions();

const params = parseParams(process.argv);
handleCommand(params);

function handleCommand(inputs) {
  if (!inputs) {
    return;
  }
  if (inputs.init) {
    inquirer.prompt(questions).then((answers) => {
      let url = templates[answers.template.split("(")[0]].downloadUrl;
      initTemplateDefault(answers, url);
      successTip(answers.projectName);
    });
  }

  if (inputs.list) {
    for (let key in templates) {
      console.log(chalk.cyanBright(`${key}:${templates[key].description}`));
    }
  }
}
function initOptions() {
  program.version(packageData.version);
  commands.forEach((command) => {
    program.option(command.key, command.desc);
  });
}
