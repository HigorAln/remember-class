var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  haveRepeatedClasses: () => haveRepeatedClasses,
  join: () => join
});
module.exports = __toCommonJS(src_exports);

// src/modules/join.ts
function join(option, options) {
  let newClassName = "";
  if (!option) {
    return "";
  }
  function mergeClass(union) {
    const optionsArray = Object.entries(union);
    optionsArray.forEach(([key, value]) => {
      if (typeof value === "boolean" && value === true) {
        newClassName = newClassName + " " + key;
      }
    });
  }
  if (typeof option === "string") {
    newClassName = newClassName + " " + option;
  } else {
    mergeClass(option);
  }
  if (options) {
    mergeClass(options);
  }
  return newClassName;
}

// src/modules/verifyIfRepeatSomeClass.ts
function haveRepeatedClasses(option) {
  const classes = option.split(" ");
  return classes.some((x) => classes.indexOf(x) !== classes.lastIndexOf(x));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  haveRepeatedClasses,
  join
});
