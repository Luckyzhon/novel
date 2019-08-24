import React, { Component } from 'react'
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
                
            </div>
           
        )
    }
    componentDidMount(){
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
