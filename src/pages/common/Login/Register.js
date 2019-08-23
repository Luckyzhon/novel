import React, { Component } from 'react'
import './style.scss'

class Register extends Component {
    render() {
        return (
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
                    <div className="input-box">
                        <span>确认密码：</span>
                        <input type="password" placeholder="请确认密码" />
                    </div>
                    <div className="btn-box">
                        <button>注册</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;