const questions = [
  {
    type: "input",
    name: "projectName",
    message: "请输入项目名称"
  },
  {
    type: "input",
    name: "description",
    message: "请输入项目简介"
  },
  {
    type: "input",
    name: "author",
    message: "请输入作者名称"
  },
  {
    type: "list",
    name: "template",
    message: "请选择一个模板",
    choices: ["ts-vue(vue-ts项目模板)", "umi-hooks(react+ts项目模板)"]
  }
];

module.exports = questions;
