import { IRequest } from './IRequest'
import { RequestHandler } from './RequestHandler'
import { ResponseHandler } from './ResponseHandler'
import { RouterType } from './RouterType'

export type AutoRouterType<
  R = IRequest,
  Args extends any[] = any[],
  ResponseType = any
> = {
  missing?: RequestHandler
  format?: ResponseHandler
} & RouterType<R, Args, ResponseType>
