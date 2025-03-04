import { GenericTraps } from './GenericTraps'
import { IRequest } from './IRequest'
import { RequestLike } from './RequestLike'
import { Route } from './Route'
import { RouteEntry } from './RouteEntry'
import { CustomRoutes } from './CustomRoutes'

export type IttyRouterType<
  RequestType = IRequest,
  Args extends any[] = any[],
  ResponseType = any,
> = {
  __proto__: IttyRouterType<RequestType, Args, ResponseType>
  routes: RouteEntry[]
  fetch: <A extends any[] = Args>(request: RequestLike, ...extra: A) => Promise<ResponseType>
  all: Route<RequestType, Args>
  delete: Route<RequestType, Args>
  get: Route<RequestType, Args>
  head: Route<RequestType, Args>
  options: Route<RequestType, Args>
  patch: Route<RequestType, Args>
  post: Route<RequestType, Args>
  put: Route<RequestType, Args>
} & CustomRoutes<Route<RequestType, Args>> & GenericTraps
