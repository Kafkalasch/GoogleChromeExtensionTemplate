import { ApplicationState } from "../ApplicationState";

export interface HelloWorldState {
    payload: string;
}

export const createInitialHelloWorldState = (): HelloWorldState => ({
    payload: "Hello World"
});

export const getHelloWorldPayload = (state: ApplicationState) => state.helloWorld.payload;
