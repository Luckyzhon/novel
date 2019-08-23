import React, { Component } from 'react'
import './style.scss'
import HeadBack from '../../../components/head-back/headBack'

export default class Login extends Component {
    render() {
        return (
            <>
                <HeadBack title="登录" info={this.props} />
                <div className="login-box">
                    <div className="form-box">
                        <div className="input-box">
                            <span>账户：</span>
                            <input type="text" placeholder="请输入手机号" />
                        </div>
                        <div className="input-box">
                            <span>密码：</span>
                            <input type="password" placeholder="请输入密码" />
                        </div>
                        <div className="btn-box">
                            <button>登录</button>
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
}
