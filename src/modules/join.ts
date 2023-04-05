type Option = string | Record<string, boolean>;

export function join(option?: Option, options?: Option, ...rest: Option[]) {
  let newClassName = "";

  function mergeClass(union: Record<string, boolean>) {
    const optionsArray = Object.entries(union!);

    optionsArray.forEach(([key, value]) => {
      if (typeof value === "boolean" && value === true) {
        newClassName = newClassName + " " + key;
      }
    });
  }

  if (option) {
    if (typeof option === "string") {
      newClassName = newClassName + " " + option;
    }else {
      mergeClass(option);
    }
  }


  if (options) {
    if (typeof options === "string") {
      newClassName = newClassName + " " + options;
    } else {
      mergeClass(options);
    }
  }

  if (rest.length > 0) {
    rest.forEach((item) => {
      if (typeof item === "string") {
        newClassName = newClassName + " " + item;
      } else {
        mergeClass(item);
      }
    });
  }


  return newClassName;
}