import IScript from '../interfaces/IScript'

class Script implements IScript {
  preRequest: string
  postRequest: string

  constructor(preRequest = '', postRequest = '') {
  	this.preRequest = preRequest
  	this.postRequest = postRequest
  }

  setPreRequest(script: string){
  	this.preRequest = script
  }

  setPostRequest(script: string){
  	this.postRequest = script
  }

  public getPreRequest(...args: any): Function {
  	return new Function(this.preRequest, args)
  }

  public getPostRequest(...args: any): Function {
  	return new Function(this.preRequest, args)
  }
}

export default Script