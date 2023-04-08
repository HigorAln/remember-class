


export function slugT(transform: string){
  // [] - remover todos os espacos na frente e atras
  const withTrim = transform.trim();
  // [] - remover todos os espacos e colocar um -
  const transformSpaceToLine = withTrim.replace(/\s/g, "-")
  // [] - remover todos os acentos
  const withOutAcents = transformSpaceToLine.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  // [] - transformar tudo em lowercase
  const lowercase = withOutAcents.toLocaleLowerCase()
  // [] - remover todos os - repetidos
  const withOutRepeatedLine = lowercase.replace(/-+/g, "-")
  // [] - remover todos os caracteres especiais
  const withOutSpecialChars = withOutRepeatedLine.replace(/[^a-z0-9]/g, "")

  return withOutSpecialChars

}