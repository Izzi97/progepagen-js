export class SyntaxTree {
  /**
   * @param {String} label 
   */
  constructor(label) {
    this.label = label
  }
}

export class STNode extends SyntaxTree {
  /**
   * @param {String} label 
   * @param  {...SyntaxTree} children 
   */
  constructor(label, ...children) {
    super(label)
    this.children = children
  }
}

export class STLeaf extends SyntaxTree {
  /**
   * @param {String} label 
   * @param {Token} token 
   */
  constructor(label, token) {
    super(label)
    this.token = token
  }
}

export class STEmpty extends STLeaf{
  constructor() {
    super('empty', {print: () => '⌀'})
  }
}

/**
 * depth-first traversal of SyntaxTrees
 * no return value, side-effect only
 * @param {SyntaxTree} st 
 * @param {(SyntaxTree) => undefined} cb 
 */
export function dft(st, cb) {
  if (st instanceof STLeaf)
    cb(st)
  else if (st instanceof STNode) {
    cb(st)
    for (const c of st.children)
      dft(c, cb)
  }
  else
    error('input is not a SyntaxTree')
}

/**
 * breadth-first traversal of SyntaxTrees
 * no return value, side-effect only
 * @param {SyntaxTree} st 
 * @param {(SyntaxTree) => undefined} cb 
 */
export function bft(st, cb) {
  const queue = [st]

  iter()

  function iter() {
    if (isEmpty(queue))
      return

    const st = queue.shift()

    if (st instanceof STLeaf) {
      cb(st)
      iter()
    }
    else if (st instanceof STNode) {
      cb(st)
      for (const c of st.children)
        queue.push(c)
      iter()
    }
    else
      error('input is not a SyntaxTree')  
  }
}
