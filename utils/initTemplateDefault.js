const chalk = require("chalk");
const fs = require("fs");
const ora = require("ora");
const path = require("path");
const download = require("download-git-repo");

function checkDirName(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(process.cwd(), (err, data) => {
      if (err) {
        return reject(err);
      }
      if (data.includes(dirname)) {
        return reject(new Error(`${dirname} already exists`));
      }
      resolve();
    });
  });
}

function downloadTemplate(gitUrl, projectName) {
  const spinner = ora("download template....").start();
  return new Promise((resolve, reject) => {
    download(
      gitUrl,
      path.resolve(process.cwd(), projectName),
      { clone: true },
      (err) => {
        if (err) {
          spinner.fail();
          return reject(err);
        }
        spinner.succeed();
        resolve();
      }
    );
  });
}

function changePackage(answers) {
  const { projectName = "", description = "", author = "" } = answers;
  return new Promise((resolve, reject) => {
    const filepath = path.resolve(process.cwd(), projectName, "package.json");
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      let packageContent = JSON.parse(data);
      packageContent.author = author;
      packageContent.description = description;
      packageContent.name = projectName;

      fs.writeFile(
        filepath,
        JSON.stringify(packageContent, null, 2),
        "utf8",
        (err, data) => {
          if (err) {
            return reject(err);
          }
          resolve();
        }
      );
    });
  });
}
async function initTemplateDefault(options, gitUrl) {
  console.log(chalk.bold.cyan("cli:") + "will create a new project starter");
  const { projectName } = options;
  try {
    await checkDirName(projectName);
    await downloadTemplate(gitUrl, projectName);
    await changePackage(options);
  } catch (e) {}
}
module.exports = initTemplateDefault;
