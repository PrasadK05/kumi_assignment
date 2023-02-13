import {legacy_createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './cart/cart.reducer';

const rootReducer= combineReducers({
    cart: reducer
})

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhanser= composer(applyMiddleware(thunk))

export const store= legacy_createStore(rootReducer, enhanser)