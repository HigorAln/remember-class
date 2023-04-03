export function haveRepeatedClasses(option: string){
  const classes = option.split(' ')
  return classes.some(x => classes.indexOf(x) !== classes.lastIndexOf(x));
}