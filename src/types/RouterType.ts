import { StatusError } from '../StatusError'
import { ErrorHandler } from './ErrorHandler'
import { IRequest } from './IRequest'
import { IttyRouterType } from './IttyRouterType'
import { RequestHandler } from './RequestHandler'
import { ResponseHandler } from './ResponseHandler'

export type RouterType<
  RequestType = IRequest,
  Args extends any[] = any[],
  ResponseType = any
> = {
  before?: RequestHandler<RequestType, Args>[]
  catch?: ErrorHandler<StatusError, RequestType, Args>
  finally?: ResponseHandler<any, RequestType, Args>[]
} & IttyRouterType<RequestType, Args, ResponseType>
