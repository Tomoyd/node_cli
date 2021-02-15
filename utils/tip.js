const chalk = require("chalk");
const { success } = require("log-symbols");

function successTip(dirname) {
  console.log(chalk.green("cd " + dirname + "\n npm init"));
}
