import { createInitialHelloWorldState, HelloWorldState } from "./HelloWorld/HelloWorldState";

export interface ApplicationState {
    helloWorld: HelloWorldState;
}

export const createInitialApplicationState = (): ApplicationState => ({
    helloWorld: createInitialHelloWorldState()
});
