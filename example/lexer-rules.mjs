export default {
  leftBracket: lexem => lexem === '[',
  rightBracket: lexem => lexem === ']',
  jeff: lexem => lexem?.name === 'Jeff',
  zero: lexem => lexem === 0,
  one: lexem => lexem === 1
}
