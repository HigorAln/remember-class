export type HaveRepeatedClasses = string | string[]

export function haveRepeatedClasses(option: HaveRepeatedClasses){
  let classes: string[]

  if (typeof option === 'string') {
    classes = option.split(' ')
  }else {
    classes = option
  }

  return classes.some(x => classes.indexOf(x) !== classes.lastIndexOf(x));
}