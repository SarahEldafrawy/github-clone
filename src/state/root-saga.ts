import { all, call } from "redux-saga/effects"
import { sharedSubscription, searchSubscription } from "./ducks"

export default function* rootSaga() {
  yield all([call(sharedSubscription), call(searchSubscription)])
}
