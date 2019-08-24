import React, { Component } from 'react'
import AppHeader from '../../../components/app-header/app-header'
import TabBar from '../../../components/tab-bar/tab-bar'
import Layout4_3 from '../../../components/layout/layout4_3'
import api from '../../../utils/api'
import './style.scss'
import { fetch } from 'whatwg-fetch';
import {Toast} from 'antd-mobile'
import 'antd-mobile/lib/toast/style/css'




export default class Home extends Component {
    state = {
        bannerImg: "",
        jpBooks: [],
        nvBooks: [],
        nanBooks: []
    }
    render() {
        let {bannerImg, jpBooks, nvBooks, nanBooks} = this.state;
        let itemList = jpBooks.length > 0 ? jpBooks[0].map((item) => 
                            <li className="item" key={item.bid}>
                                <img src={item.book_cover} alt="" />
                                <p>{item.bookname}</p>
                                <span>{item.author_name}</span>
                            </li>
                        ) : []
        return (
            <div id="home">
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
                
                <div className="main">
                    <div className="banner">
                        <img src={bannerImg} alt="" />
                    </div>

                    <div className="jp">
                        <div className="jp_title">
                            <h3><span className="icon"></span>精品推荐</h3>
                        </div>
                        <ul className="list">
                            {itemList}
                        </ul>
                        <div className="change">
                            <span>换一换</span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAATlBMVEUAAACZmZmampqampqbm5uampqampqampqbm5uenp6dnZ2ZmZmbm5udnZ2ZmZmampqampqampqampqampqampqampqampqcnJyampqZmZnzhHdqAAAAGXRSTlMA7GhWOq2HwkMPF/UxIeG5kXJf0st5TCig0LILkwAAAmxJREFUWMOtmNmSsyAQhQ+IRlHcl+H9X/RfaJFJFCH43UzVpKqht9Mt8NHwIp9apjVrp7zgDb6h4jnTb7CcS8SR5fqCLkM4vNUe2FAhiJFc8pnCPc1LBzAJ3LBoh7orRqEkUCkxFl3t/tbDh3Suw/oSb4je8XpWHreOIL8ukrMeR7ESF5TMmilxiThMXRxW2KPGmyKzB/LT+2gil7dVn9s7eS60BJXsnsGTGIwm4x+/+OPJTnI3/fu/QCANWZpPPF9+hgaItdQjlZLiJJAKp75DMlQFA1KpmMlchVSyp66El7kSkhHUKU9dqUMyq7mSBJB1Q0rUTeK4KQaW4GNvpGc32SeGmwGbJpPfYjquQbbLtMR3dBSkxSq1iOqOsvmlrAU1HlkNZqz/+qAcZc3hTugfBKKMD+sR7QmtdphVlBLpwhptTfb90/NsUBCdREX5JwPW1BIoREQryAL9UUeoCliCtgRyk1yTx8CugzqP9hYLo2ArZ4XYIprM0mKyI0VGyh3/lW8qyJGKNErthJPxHIUb4W1ZNoQjZyfZPEkrf3ZDKxqTKnzJQIbUrpUibbQxI7VpEtmSLvLUGVcV7L8CyT1aCShHK194ahMQSIY9daXhsU3gsX1p2BsvmWmfR6kI+0EQwTbw6kruWBNXNa3EO3OspbI+H6mKRQ02ZDUp7NkJERFfPJ/ImZXf23qSnSY2z1S43wS5Ff3s0m/iJTxRtopfr97PQjK1Xhw265DNTM3uA4L4OIgeEEJ2xf7zSaPanzS0S3HbLZMOYA4p3IHdmWl54Fjwm2JDjI536U9jhIx8rAt7PqzZlBejN8B/AE4kdM269CdQAAAAAElFTkSuQmCC" alt="" />
                        </div>
                    </div>

                    <Layout4_3 title="女生美文" list={nvBooks} />
                    <Layout4_3 title="男生热文" list={nanBooks} />
                </div>
            </div>
        )
    }
    componentDidMount(){
        fetch(api.Home_BOOKS_API).then((res) => {
            return res.json();
        }).then((result)=>{
            let {module} = result.data;
            console.log(module);
            this.setState({
                bannerImg: module[1].content[0].image_url,
                jpBooks: [...this.state.jpBooks, module[2].content],
                nvBooks: [...this.state.nvBooks, module[3].content],
                nanBooks: [...this.state.nanBooks, module[4].content]
            })
        }).catch((err) => {
            console.log("请求失败");
            console.log(err);
        });
        Toast.loading('加载中...',1,()=>{
            
        })
    }
    toLogin(){
        this.props.history.push("/login");
    }
}
