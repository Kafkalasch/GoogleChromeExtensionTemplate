import { combineReducers } from "redux";
import { ApplicationState } from "./ApplicationState";
import { helloWorldReducer } from "./HelloWorld/HelloWorldReducer";

export const applicationReducer = combineReducers<ApplicationState>({
    helloWorld: helloWorldReducer
});
