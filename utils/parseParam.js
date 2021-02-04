const { program } = require("commander");
const path = require("path");
const fs = require("fs");
function parseParams() {
  program
    .option("-d,-debug", "output extra debugging")
    .option("-s,--small", "small pizza size")
    .option("-p,--pizza-type <type>", "flavour of pizza");
  const params = program.parse(process.argv);
  console.log("args :>> ", program.args);

  const newTemp = program.args[0];

  const tem = path.join(__dirname, "../template/index.js");

  console.log("pwd :>> ", process.cwd());

  const options = program.opts();
  console.log("options :>> ", options);
  if (options.debug) {
    console.log("debug");
  }
  if (options.small) {
    console.log("small :>> ", small);
  }
  if (options.pizzaType) {
    print("pizzaType");
  }
}

module.exports = parseParams;
