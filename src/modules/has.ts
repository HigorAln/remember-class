type HasProps = string | string[]

export function has(option: HasProps, revalidate: HasProps){
  let validateClass = typeof option === 'string' ? option.split(' ') : option
  let revalidateClass = typeof revalidate === 'string' ? revalidate.split(' ') : revalidate

  // verify if validateClass have some in revalidateClass
  return validateClass.some(x => revalidateClass.indexOf(x) !== -1);
}