const fs = require("fs");
const JSON5 = require("json5");
const { trace } = require("./Log");

function read_file(path, encoding) {
  try {
    trace(`Reading file: ${path}`);
    return fs.readFileSync(path, encoding);
  } catch (err) {
    console.error(`Can't read file ${path}.\n${err}`);
  }
  return "";
}

function parse_file(path, encoding) {
  try {
    return JSON5.parse(read_file(path, encoding));
  } catch (err) {
    console.error(`Can't parse file ${path}.\n${err}`);
  }
  return null;
}

function write_file(fname, str) {
  fs.writeFileSync(fname, str);
}

module.exports = {
  read_file,
  parse_file,
  write_file
};