import { IAppState } from "@github/state/types"

const getSearch = ({ search }: IAppState) => search
export const searchResult = (state: IAppState) => getSearch(state).result
export const searchResultHasMore = (state: IAppState) => getSearch(state).hasMore
export const searchResultPage = (state: IAppState) => getSearch(state).page
export const searchLoading = (state: IAppState) => getSearch(state).loading
