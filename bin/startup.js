#!/usr/bin/env node

const chalk = require("chalk");
const program = require("commander");
const inquirer = require("inquirer");
const commands = require("../config/commands");
const questions = require("../config/questions");
// @ts-ignore
const packageData = require("../package.json");
const templates = require("../template");
const initTemplateDefault = require("../utils/initTemplateDefault");
const parseParams = require("../utils/parseParam");
const successTip = require("../utils/tip");

initOptions();
const params = parseParams(process.argv);
console.log("params :>> ", params);
handleCommand(params);

async function handleCommand(inputs) {
  if (!inputs) {
    return;
  }

  if (inputs.init) {
    return inquirer.prompt(questions).then(async (answers) => {
      let url = templates[answers.template.split("(")[0]].downloadUrl;
      await initTemplateDefault(answers, url);
      successTip(answers.projectName);
    });
  }

  if (inputs.list) {
    for (let key in templates) {
      console.log(chalk.cyanBright(`${key}:${templates[key].description}`));
    }

    return;
  }
  if (inputs.projectName) {
    let url = templates[inputs.template].downloadUrl;
    await initTemplateDefault({ projectName: inputs.projectName }, url);
    successTip(inputs.projectName);
    return;
  }
}

function initOptions() {
  program.version(packageData.version);
  commands.forEach((command) => {
    program.option(command.key, command.desc, command.default);
  });
}
