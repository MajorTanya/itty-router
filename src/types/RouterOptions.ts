import { StatusError } from '../StatusError'
import { ErrorHandler } from './ErrorHandler'
import { IRequest } from './IRequest'
import { IttyRouterOptions } from './IttyRouterOptions'
import { RequestHandler } from './RequestHandler'
import { ResponseHandler } from './ResponseHandler'

export type RouterOptions<
  RequestType = IRequest,
  Args extends any[] = [],
> = {
  before?: RequestHandler<RequestType, Args>[]
  catch?: ErrorHandler<StatusError, RequestType, Args>
  finally?: ResponseHandler<any, RequestType, Args>[]
} & IttyRouterOptions
