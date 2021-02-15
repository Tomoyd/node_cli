const { program } = require("commander");

function parseParams(argv) {
  program.parse(argv);
  return program.opts();
}

module.exports = parseParams;
