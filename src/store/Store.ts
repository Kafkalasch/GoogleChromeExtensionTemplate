import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applicationReducer } from "./ApplicationReducer";
import { applicationSagas } from "./ApplicationSagas";
import { ApplicationState, createInitialApplicationState } from "./ApplicationState";

const sagaMiddleware = createSagaMiddleware();
const initialState = createInitialApplicationState();
const reducer = applicationReducer;
const configuredStore: Store<ApplicationState> = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(applicationSagas);

export const getStore = (): Store<ApplicationState> => configuredStore;
