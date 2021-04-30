import IRequest from '../interfaces/IRequest'

class Request implements IRequest{
  headers: Map<string, string>
  queryParams: Map<string, string>
  method: string
  url: string
  preRequestScript: string
  body: any

  constructor(url: string, method: string){
  	const urlToken: Array<string> = url.split('?')
  	this.url = urlToken[0]

  	this.queryParams = urlToken.length > 1 ? this.prepareQueryParams(urlToken[1]): {}
  	this.headers = {}
  	this.method = 'GET'
  	this.preRequestScript = null
  	this.body = null
  }
  

  private prepareQueryParams(querystring: string): Map<string, string>{
  	const queryMap: Map<string, string> = {}
  	const entries: Array<string> = querystring.split('&')

  	entries.forEach( (entry: string) => {
  		const key = entry.substr(0, entry.indexOf('='))
  		const value = entry.substr(entry.indexOf('='))
  		this.queryParams[key] = value
  	})

  	return this.queryParams

  }
}