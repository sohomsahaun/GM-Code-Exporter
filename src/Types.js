const fs = require("fs");
const { read_file } = require("./File");

function get_gml_files(path) {
  const files = fs.readdirSync(path);
  let gml = [];
  files.forEach((file) => {
    if (file.endsWith(".gml")) {
      let fname = file.slice(file.lastIndexOf("/")+1);
      fname = fname.slice(0, fname.lastIndexOf("."));
      gml.push(fname);
    }
  });
  return gml;
}

class Resource {
  constructor(name, path) {
    this.name = name;
    this.path = path;
    this.gmlFiles = get_gml_files(this.path);
  }

  get_header(fname) {
    return `/// Resource`;
  }

  get_footer(fname) {
    return ``;
  }

  to_text() {
    const files = get_gml_files(this.path);

    let out = ``;
    
    files.forEach((fname) => {
      out += this.get_header(fname);
      out += `${read_file(`${this.path}/${fname}.gml`)}\n`;
      out += this.get_footer(fname);
    });
    
    return out;
  }

  static is(yy) {
    return (yy.resourceType !== undefined);
  }
}

class Object extends Resource {
  constructor(name, path) {
    super(name, path);
  }

  get_header(fname) {
    return `/// Object : ${this.name} | ${fname}\n`;
  }

  get_footer(fname) {
    return `\n`;
  }

  static is(yy) {
    return (
      (yy.resourceType !== undefined) &&
      (yy.resourceType === "GMObject")
    );
  }
}

class Script extends Resource {
  constructor(name, path) {
    super(name, path);
  }

  get_header(fname) {
    return `/// Script : ${this.name}\n`;
  }

  get_footer(fname) {
    return `\n`;
  }

  static is(yy) {
    return (
      (yy.resourceType !== undefined) &&
      (yy.resourceType === "GMScript")
    );
  }
}

module.exports = {
  Object,
  Script
};