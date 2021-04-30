import IHeader from './IHeader'

enum RequestMethod {
  GET, POST, PUT, DELETE, OPTIONS, PATCH // CONNECT, TRACE
}

interface IRequest {
  headers: Map<string, string>
  queryParams: Map<string, string>

  method: string
  
  url: string
  preRequestScript: string

  body: any

}

export default IRequest