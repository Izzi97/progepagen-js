# progepagen-js [STILL UNDER CONSTRUCTION]
a probabilistic parser-generator that operates on generic sequences of JS objects

## Features
### Lexer
- operates on sequence of arbitrary JS objects
- recognizes tokens with supplied predicates that may arbitrarily access the objects
### Grammars
- specified in simple, BNF-like fashion
- each production rule is associated with a weight
### Parser
- top down
- backtracking supported
- empty words supported

## Getting Started
