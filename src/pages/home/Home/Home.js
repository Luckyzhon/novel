import React, { Component } from 'react'
import AppHeader from '../../../components/app-header/app-header'
import TabBar from '../../../components/tab-bar/tab-bar'
import './style.scss'



export default class Home extends Component {
    render() {
        return (
            <div className="page" id="home">
                <div className='home-header'>
                <AppHeader 
                    left={<span className="home-header-left"><img src='/images/logo.png' alt='' /> <img src='/images/title.png' alt='' /></span>} 
                    right={
                        <div className="home-header-right">
                            <img onClick={()=>this.toLogin()} src='/images/login.png' alt='' /> 
                            <span className="iconfont icon-shuji"></span> 
                            <span className="iconfont icon-sousuo"></span>
                        </div>}/>
                </div>
                <TabBar/>
            </div>
        )
    }
    toLogin(){
        this.props.history.push("/login");
    }
}
