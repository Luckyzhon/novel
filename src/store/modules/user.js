/*
 * @Author: lyq 
 * @Date: 2019-08-23 20:23:44 
 * @Last Modified by: lyq
 * @Last Modified time: 2019-08-24 09:40:47
 */

 import api from '../../utils/api'
 import {post} from '../../utils/request'
 import {Toast} from 'antd-mobile'
 import 'antd-mobile/lib/toast/style/css'

//types
const set_login_status = 'user/set_login_status';

// state
const initialState = {
    isLogin: false,
};

// reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        case set_login_status:
            return{
                ...state,
                isLogin: action.value
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




//异步action
//注册
export const requestRegisterAction = (username, password, history) => async () => {
    try {
        let result = await post(api.REGIESTER_API, {username, password});
        Toast.info(result.data.message);
        if (result.data.code === 0) {
            history.push('/login')
        }
    } catch (error) {
        console.log("注册失败");
    }
}

//登录
export const requestLoginAction = (username, password, history) => async (dispatch) => {
    try {
        let result = await post(api.LOGIN_API, {username, password});
        Toast.info(result.data.message);
        if (result.data.code === 0) {
            let action = setLoginStatusAction(true);
            dispatch(action);
            history.push('/home');
        }
    } catch (error) {
        console.log("登录失败");
    }
}