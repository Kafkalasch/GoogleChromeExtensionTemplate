import { all } from "@redux-saga/core/effects";
import { watchChangeHelloWorldPayloads } from "./HelloWorld/HelloWorldSaga";

export function* applicationSagas() {
    yield all([watchChangeHelloWorldPayloads()]);
}
