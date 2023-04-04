export interface JoinProps {
  class: string | Record<string, boolean>;
  options?: Record<string, boolean>;
}

export function join(option: JoinProps["class"], options?: JoinProps['options']) {
  let newClassName = "";

  if (!option) {
    return "";
  }

  function mergeClass(union: JoinProps["options"]) {
    const optionsArray = Object.entries(union!);

    optionsArray.forEach(([key, value]) => {
      if (typeof value === "boolean" && value === true) {
        newClassName = newClassName + " " + key;
      }
    });
  }
  

  if (typeof option === "string") {
    newClassName = newClassName + " " + option;
  }else {
    mergeClass(option);
  }

  if (options) {
    mergeClass(options);
  }

  return newClassName;
}