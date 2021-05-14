class TestGroup {
  order: number
  parent: TestGroup | null
  children: Map<number, TestGroup>

  constructor(order: number, parent = null) {
  	this.order = order
  	this.parent = parent
  	this.children = new Map()
  }
}

export default TestGroup