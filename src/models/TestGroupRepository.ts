import TestGroup from './entity/TestGroup'

class TestGroupRepository {
  root: TestGroup

  constructor(){
  	this.root = new TestGroup('root')
  }

  public getRoot(): TestGroup {
  	return this.root
  }
}


const instance = new TestGroupRepository()


export default instance