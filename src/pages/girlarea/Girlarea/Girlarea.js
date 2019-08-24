import React, { Component } from 'react'
import HeadBack from '../../../components/head-back/headBack'
import AppScroll from '../../../components/app-scroll/app-scroll'
import Banner from './children/banner'
export default class Girlarea extends Component {
    render() {
        return (
            <div>
               <HeadBack title="女生专区" info={this.props}/>
               <AppScroll>
                   <Banner/>
               </AppScroll>
            </div>
        )
    }
}
