/**
 * Created by LannyCodes on 2019/5/25
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {counter} from './reducer'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();


/**
 * 自定义中间件
 * @param getState
 */
const logger = ({dispatch, getState}) => (next) => (action) => {
    console.log('state will dispatch', getState())
    const configStore = next(action)
    console.log('state after dispatch', getState())
    return configStore
};

// A very simple store
let MainReducers = combineReducers({count: counter});
let store = createStore(
    MainReducers,
    applyMiddleware(thunk, loggerMiddleware, logger)
);

export default store;