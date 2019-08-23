/*
 * @Author: lyq 
 * @Date: 2019-08-23 20:23:44 
 * @Last Modified by: lyq
 * @Last Modified time: 2019-08-23 22:02:00
 */

 import api from '../../utils/api'
 import {post, get} from '../../utils/request'

//types
const set_login_status = 'user/set_login_status';
const set_user_info = 'user/set_user_info';

// state
const initialState = {
    isLogin: false,
    userInfo: {}
};

// reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        case set_login_status:
            return{
                ...state,
                isLogin: action.value
            }
        case set_user_info:
            return{
                ...state,
                userInfo: action.value
            }
        default:
            return state;
    }
};

//同步action
//设置登录状态
const setLoginStatusAction = (value) => ({
    type: set_login_status,
    value
})

//设置用户信息
const setUserInfoAction = (value) => ({
    type: set_user_info,
    value
})



//异步action
//注册
export const requestRegisterAction = (username, password, history) => async () => {
    try {
        let result = await post(api.REGIESTER_API, {username, password});
        alert(result.data.message);
        if (result.data.code === 0) {
            history.push('/login')
        }
    } catch (error) {
        console.log("注册失败");
    }
}

//登录
export const requestLoginAction = (username, password, history) => async () => {
    try {
        let result = await post(api.LOGIN_API, {username, password});
        alert(result.data.message);
        if (result.data.code === 0) {
            let action = setLoginStatusAction(true);
            dispatch(action);
            history.push('/home');
        }
    } catch (error) {
        console.log("登录失败");
    }
}