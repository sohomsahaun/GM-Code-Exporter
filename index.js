#!/usr/bin/env node
const { Object, Script } = require("./src/Types");
const { parse_file, write_file } = require("./src/File");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

let projectPath = "";
let projectName = "";

function init_project(path) {
  const ind = path.lastIndexOf("/");
  projectPath = path.slice(0, ind);

  projectName = path.slice(ind+1);
  projectName = projectName.slice(0, projectName.lastIndexOf("."));
}

function main() {
  if (argv.yyp === undefined) {
    console.error(`You must provide the yyp path.`);
    return;
  }

  const yypPath = argv.yyp.replace(/\\/g, "/");
  init_project(yypPath);
  
  const yyp = parse_file(yypPath, "utf8");
  if (yyp === null) return;

  const getObjects = (argv.obj === true);
  const getScripts = (argv.scr === true);

  let objects = [];
  let scripts = [];

  yyp.resources.forEach((res) => {
    let yyPath = `${projectPath}/${res.id.path}`;
    let yyDir = yyPath.slice(0, yyPath.lastIndexOf("/"));
    let yy = parse_file(yyPath, "utf8");
    if (getObjects && Object.is(yy)) {
      objects.push(new Object(yy.name, yyDir));
    }
    if (getScripts && Script.is(yy)) {
      scripts.push(new Script(yy.name, yyDir));
    }
  });

  let output = "";

  if (getObjects) {
    objects.sort((a, b) => { return a.name.localeCompare(b.name); });
    objects.forEach((res) => { output += res.to_text(); });
  }

  if (getScripts) {
    scripts.sort((a, b) => { return a.name.localeCompare(b.name); });
    scripts.forEach((res) => { output += res.to_text(); });
  }
  
  write_file(`./out/${projectName}.txt`, output);
}
main();