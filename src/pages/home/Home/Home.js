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
                    left={<span className="home-header-left"><img src='/images/logo.png'/> <img src='/images/title.png'/></span>} 
                    right={
                        <div className="home-header-right">
                            <img src='/images/login.png'/> 
                            <span className="iconfont icon-shuji"></span> 
                            <span className="iconfont icon-sousuo"></span>
                        </div>}/>
                </div>
                <TabBar/>
            </div>
        )
    }
}
