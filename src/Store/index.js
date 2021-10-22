import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducerProfile } from "./reducerProfile";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;;

export const store = createStore(
    combineReducers({
        profile:reducerProfile
    }),
    composeEnhancers(applyMiddleware(thunk))
)
