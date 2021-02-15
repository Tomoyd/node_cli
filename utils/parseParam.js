const { program } = require("commander");

function parseParams(argv) {
  program.parse(argv);
  const projectName = program.args[0];
  return { ...program.opts(), projectName: projectName };
}

module.exports = parseParams;
