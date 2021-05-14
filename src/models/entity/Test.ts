import Request from './Request'

class Test {
  order: number
  request: Request 

  constructor(order: number){
  	this.order = order
  	this.request = new Request()
  }

}