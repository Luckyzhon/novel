import React, { Component } from 'react'
import {connect} from 'react-redux'
import HeadBack from '../../../components/head-back/headBack'
import {requestRegisterAction} from '../../../store/modules/user'

import './style.scss'

class Register extends Component {
    state = {
        username: '',
        password: '',
        agianPwd: ''
    }
    render() {
        let {username, password, agianPwd} = this.state;
        let {reisterAction, history} = this.props;
        return (
            <>
                <HeadBack title="注册" info={this.props} />
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
                        <div className="input-box">
                            <span>确认密码：</span>
                            <input value={agianPwd} onChange={this.agianPwdChangeAction} type="password" placeholder="请确认密码" />
                        </div>
                        <div className="btn-box">
                            <button onClick={()=>reisterAction(username, password, agianPwd, history)}>注册</button>
                        </div>
                    </div>
                </div>
            </>
        );
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

    agianPwdChangeAction = (eve)=> {
        this.setState({
            agianPwd: eve.target.value
        })
    }
}


const mapStateToProps = (state)=>({
    
})


const mapDispatchToProps = (dispatch)=>({
    //注册
    reisterAction(username, password, agianPwd, history){
        if(!(/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(username))){
            alert('手机号格式不正确!');
            return;
        }
        if(password !== agianPwd){
            alert('2次密码输入不一致');
            this.setState({
                password: '',
                agianPwd: ''
            })
            return;
        }
        // 执行action请求
        let action = requestRegisterAction(username, password, history);
        dispatch(action);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);