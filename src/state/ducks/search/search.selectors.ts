import { IAppState } from "@github/state/types"

const getSearch = ({ search }: IAppState) => search
export const searchResult = (state: IAppState) => getSearch(state).result
