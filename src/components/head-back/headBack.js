import React, { Component } from 'react';
import './style.scss'

class headBack extends Component {
    render() {
        return (
            <div className="head-box">
                <div className="img-box">
                    <img onClick={()=>{
                        this.props.info.history.goBack(-1);
                    }} src="http://c-shuqi.11222.cn/assets/backIcon_ba492d1.png" alt="" />
                </div>
                <h1>{this.props.title}</h1>
                <div className="img-box">
                    <img onClick={()=>{
                        this.props.info.history.push('/home');
                    }} src="http://c-shuqi.11222.cn/assets/home_48a04f5.png" alt="" />
                </div>                
            </div>
        );
    }
}

export default headBack;