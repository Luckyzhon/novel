import React, { Component } from 'react'
import {connect} from 'react-redux'
import HeadBack from '../../../components/head-back/headBack'
import {requestLoginAction} from '../../../store/modules/user'

import './style.scss'


class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        let {loginAction} = this.props;
        let {username, password} = this.state;
        return (
            <>
                <HeadBack title="登录" info={this.props} />
                <div className="login-box">
                    <div className="form-box">
                        <div className="input-box">
                            <span>账户：</span>
                            <input value={username} onChange={this.userNameChangeAction} type="text" placeholder="请输入手机号" />
                        </div>
                        <div className="input-box">
                            <span>密码：</span>
                            <input value={password} onChange={this.passWordChangeAction} type="password" placeholder="请输入密码" />
                        </div>
                        <div className="btn-box">
                            <button onClick={()=>loginAction(username, password, this.props.history)}>登录</button>
                        </div>
                        <div className="reg-box">
                            <p>忘记密码</p>
                            <p onClick={()=>this.toRegister()}>注册</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    toRegister(){
        this.props.history.push('/register');
    }

    userNameChangeAction = (eve)=> {
        this.setState({
            username: eve.target.value
        })
    }

    passWordChangeAction = (eve)=> {
        this.setState({
            password: eve.target.value
        })
    }
}

const mapStateToProps = (state)=>({

})


const mapDispatchToProps = (dispatch)=>({
    //登录
    loginAction(username, password, history){
        if(!(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(username))){
            alert('手机号格式不正确!');
            return;
        }

        // 发送请求给后台执行登录
        let action = requestLoginAction(username, password, history);
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);