import { createStore, combineReducers, compose,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'  //redux 的中间件，增强dispatch功能，使用该中间件可以dispatch一个异步函数
//dispatch 接收一个函数，该函数执行，并且函数中接收到重新到dispatch 方法
// 引入各个reducer模块
import home from './modules/home'
import classify from './modules/classify'


// 合并多个reducer
const reducer = combineReducers({
  home,
  classify,
});

// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 输出store
export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)//使用中间件
));

