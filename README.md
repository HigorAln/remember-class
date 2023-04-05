# Remember-class

<p style="font-size: 16px">
  Uma biblioteca simples para o uso de de classes no CSS, a criação dessa biblioteca veio pela minha necessidade de fazer junções de classes no TailwindCSS, mas eu optei por colocar outros método que podem facilitar para outros usuários, se optar por mim impulsionar, aceitarei um café
</p>

## Instalação
<br/>  

```bash
  npm install remember-class
  yarn add remember-class
  pnpm add remember-class
```

## Utilização
<br/>

```javascript
  import rememberClass from 'remember-class'

  rememberClass('bg-red-500', 'text-white', 'p-4', 'rounded-md')
  rememberClass('foo', { bar: true }) => 'foo bar'
  rememberClass('foo', 'bar') => 'foo bar'
  rememberClass({ 'foo-bar': true }) => 'foo-bar'
  rememberClass({ 'foo-bar': false }) => ''
  rememberClass({ foo: true }, { bar: true }) => 'foo bar'
  rememberClass({ foo: true, bar: true }) => 'foo bar'
  rememberClass('foo', { bar: true, duck: false }, 'baz', { quux: true }) => 'foo bar baz quux'
```
<br/>

## Métodos disponíveis
<br/>

### haveRepeatedClasses
```javascript
  import { haveRepeatedClasses } from 'remember-class'

  haveRepeatedClasses('bg-red-500', 'text-white', 'p-4', 'rounded-md') => false
  haveRepeatedClasses('foo foo') => true
  haveRepeatedClasses('foo bar') => false
  haveRepeatedClasses('foo foo bar') => true
  haveRepeatedClasses('foo bar foo') => true
```
<br/>

### has
```javascript
  import { has } from 'remember-class'

  has('bg-red-500', ["text-gray-200, border"]) => false
  has('foo', 'foo') => true
  has('foo', 'bar') => false
  has('foo bar', 'bar') => true
  has('foo bar', 'baz') => false
  has('foo bar', ['bar', 'baz']) => true
  has('foo bar', ['baz', 'qux']) => false
```
<br/>

## Contribuir:
<p style="font-size:16px">Para contribuir com a biblioteca, siga os seguintes passos:</p>

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça suas alterações
4. Faça o commit das suas alterações (`git commit -m 'Add some things'`)
5. Faça o push para a branch (`git push origin feature/minha-feature`)
6. Abra um pull request
<br/>

## Nota
<p style="font-size:16px">
  Essa biblioteca esta em criação, então pode ter alguns <strong>bugs</strong>, se encontrar algum, por favor, abra uma issue.

  Se você gostou da biblioteca, por favor, deixe uma <strong>estrela</strong>

  Se você quiser contribuir com a biblioteca, por favor, leia a seção de <strong>contribuição</strong>
</p>


<br/>

## Impulsionar
<p>
  Se você gostou da biblioteca, e quer me impulsionar, por favor, me compre um café
</p>
<p>
  <a href="https://www.buymeacoffee.com/higoraln" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" >
  </a>
</p>
