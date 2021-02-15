const commands = [
  {
    key: "-i,--init",
    desc: "初始化项目"
  },
  {
    key: "-v,--version",
    desc: "查看版本信息"
  },
  {
    key: "-l,--list",
    desc: "查看可用模板列表"
  },
  {
    key: "-t,  --template <type>",
    desc: "创建模板类型",
    default: "ts-vue"
  }
];

module.exports = commands;
