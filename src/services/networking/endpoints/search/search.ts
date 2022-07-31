import { HttpMethod, IDataEndpoint } from "@github/services/networking/endpoints/endpoint.types"
import { SnakeKeysToCamelCase } from "@github/utils"
import { IServerSearchPayload, IServerSearchParams } from "./search.server"

export type ISearchPayload = SnakeKeysToCamelCase<IServerSearchPayload>
export type ISearchData = SnakeKeysToCamelCase<IServerSearchParams>

export const searchEndpoint: IDataEndpoint<IServerSearchParams, IServerSearchPayload> = {
  path: "search/users",
  method: HttpMethod.Get,
} as const
