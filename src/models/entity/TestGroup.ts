class TestGroup {
  name: string
  order: number
  parent: TestGroup | null
  children: Map<number, TestGroup>

  constructor(name: string, parent: TestGroup | null = null) {
  	this.name = name
  	// this.order = order
  	this.parent = parent
  	this.children = new Map()
  }

  public getChildren(){
  	return this.children
  }

  public addChild(groupName: string){
  	const amount = this.children.size
  	this.children.set(amount, new TestGroup(groupName, this))
  }
}

export default TestGroup