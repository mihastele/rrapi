import IHeader from './IHeader'

interface IResponse {
  headers: Map<string, string>
  queryParams: Map<string, string>

  statusCode: number

  url: string
  postRequestScript: string
  
  body: any

}

export default IResponse