import React, { Component } from 'react'
<<<<<<< HEAD
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

=======
import {  Link, Route , BrowserRouter as Router  } from 'react-router-dom'
import {connect} from 'react-redux'
import {requestRankData} from '../../../store/modules/rank'
import './rank.scss'
import AppHeader from '../../../components/head-back/headBack'

 class Rank extends Component {
     
    render() {
        let listData = this.props.listData 
       
        console.log(listData)
        const listDOM = listData.map(item=>(
           item.content.title ? <Link className='list-item' key={item.id} to='rank/ranklist/:flag' >
                    <span className='bgPic'></span>
                    <div><h3>
                        {item.content.title}
                    </h3>
                    <span>
                        {item.content.desc}
                    </span></div>
                
                
            </Link> : ''
        ))
        return (
            
            <div className='rank'>
                <AppHeader title='排行' info={this.props}/>
                <ul className='list'>
                    {
                        listDOM
                    }
                </ul>
                
>>>>>>> fc4d68513958204897829789f8e3661b7e43ebb6
            </div>
           
        )
    }
    componentDidMount(){
<<<<<<< HEAD
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
=======
        this.props.getRankData()
    }
    goChildren(){
        console.log(this.props)
        this.props.history.push('rank/ranklist/:flag')
    }
}

const mapStateToProps = (state)=>({
    
    listData : state.rank.rankData
    
})

const mapDispatchToProps = (dispatch)=>({

    getRankData(){
        let action = requestRankData()
        dispatch(action)
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Rank)
>>>>>>> fc4d68513958204897829789f8e3661b7e43ebb6
