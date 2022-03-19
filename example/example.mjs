import { Lexer } from '../lexer.mjs'
import { Grammar } from '../grammar.mjs'
import { Parser } from '../parser.mjs'
import { dft } from '../syntax-tree.mjs'

import lexerRules from './lexer-rules.mjs'
import productionRules from './production-rules.mjs'

const lexer = new Lexer(lexerRules)
const terminals = lexer.terminals()
const grammar = Grammar.from(terminals, productionRules)
const parser = new Parser(grammar)

const input = [ 1, 0, 1, '[', {name: 'Jeff'}, ']', 1, 0, 0, 1 ]
const tokens = lexer.run(...input)
const res = parser.run(...tokens)

if (res.success)
  dft(res.st, st => console.log(st.label) )
