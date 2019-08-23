import React, { Component } from 'react'
import AppHeader from '../../../components/head-back/headBack'
import { requestRankData } from "../../../store/modules/rank";
import {connect} from 'react-redux'
import { get } from "../../../utils/request";
import api from '../../../utils/api'
export default class Rank extends Component {
    // state={
    //     rankData: {}
    // }
    render() {
        // let data = this.state.rankData.data ? this.state.rankData.data : {}
        // console.log(data.module)
        // let listData = data.map(item=>(
        //     <li className='content-item' >
        //         <img src={item.url} />
        //         <span>
        //             {item.title}
        //         </span>
        //         <span>

        //         </span>
        //     </li>
        // ))
        return (
            <div className='rank'>
                <AppHeader title='排行' info={this.props} />
                <ul className='content'>
                    {
                        listData
                    }
                </ul>

            </div>
        )
    }
    componentDidMount(){
        // requestRankData();
        // get(api.RANKING_API).then(result=>{
        //     this.setState({rankData:result})
        // })
        this.getRankData()
    }
}
const mapStateToprops = (state)=>{
    rankData = state.rank.rankData
    console.log(state.rank)
}
const mapDispatchToprops = (dispatch)=>{
    getRankData(){
            
    }
}

export default connect(mapStateToprops)(Rank)
