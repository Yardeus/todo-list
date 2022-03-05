import {applyMiddleware, combineReducers, createStore} from "redux";
import todoReducer from "./todo-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'
let rootReducer = combineReducers({
    todo: todoReducer,
});

//const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
/*
const makeStore = () => {
    return createStore(rootReducer, composeWithDevTools(
        applyMiddleware(thunk)
    ));
};*/
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));


export default store;
