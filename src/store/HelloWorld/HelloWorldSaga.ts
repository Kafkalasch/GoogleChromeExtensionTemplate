import { takeEvery } from "@redux-saga/core/effects";
import { ChangeHelloWorldPayloadAction, HelloWorldActionType } from "./HelloWorldActions";

export function* watchChangeHelloWorldPayloads() {
    yield takeEvery(HelloWorldActionType.ChangeHelloWorldPayload, logHelloWorldPayloads);
}

function* logHelloWorldPayloads(action: ChangeHelloWorldPayloadAction) {
    yield (console.log, action.payload);
}
