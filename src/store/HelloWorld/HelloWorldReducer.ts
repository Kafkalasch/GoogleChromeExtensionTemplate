import { Reducer } from "redux";
import { HelloWorldAction, HelloWorldActionType } from "./HelloWorldActions";
import { createInitialHelloWorldState, HelloWorldState } from "./HelloWorldState";

export const helloWorldReducer: Reducer<HelloWorldState, HelloWorldAction> = (
    state: HelloWorldState = createInitialHelloWorldState(),
    action: HelloWorldAction
): HelloWorldState => {
    switch (action.type) {
        case HelloWorldActionType.ChangeHelloWorldPayload:
            return reduceChangeHelloWorldPayloadAction(state, action);
        default:
            return state;
    }
};

const reduceChangeHelloWorldPayloadAction = (state: HelloWorldState, action: HelloWorldAction): HelloWorldState => {
    return {
        ...state,
        payload: action.payload
    };
};
