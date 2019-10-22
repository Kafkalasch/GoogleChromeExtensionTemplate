import { Action } from "redux";

export enum HelloWorldActionType {
    ChangeHelloWorldPayload = "helloworld/CHANGE_PAYLOAD"
}

export type HelloWorldAction = ChangeHelloWorldPayloadAction;

export interface ChangeHelloWorldPayloadAction extends Action<HelloWorldActionType> {
    type: HelloWorldActionType.ChangeHelloWorldPayload;
    payload: string;
}

export const createChangeHelloWorldPayloadAction = (payload: string): ChangeHelloWorldPayloadAction => ({
    type: HelloWorldActionType.ChangeHelloWorldPayload,
    payload: payload
});
