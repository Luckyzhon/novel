import React, {Component} from 'react'
import AppScroll from '../../../../components/app-scroll/app-scroll'
import './style.scss'

export default class ClassifyGirldata extends Component {
    
    render() {
       
        let data = this.props;

        return (
            <div id="classifygirldata">
                <AppScroll>

                    {data.girl?<h1 >女生分类</h1>:null}
                
                    {data.girl?
                        data.girl.map(item =>{
                            
                            return (
                                <div className="classifygirldata-con" >
                                <div className="box" >
                                <h2>{Object.keys(item)}</h2>
                                    {item[Object.keys(item)].list.map(i =>{
                                        return (
                                            <span>{i}</span>
                                        )
                                    })}
                                </div>

                                </div>

                            )
                        })
                        :null
                    }
                    {data.boy?<h1>男生分类</h1>:null}
                
                    {data.boy?
                        data.boy.map(item =>{
                            
                            return (
                                <div className="classifygirldata-con">
                                  <div className="box">
                                    <h2>{Object.keys(item)}</h2>
                                    {item[Object.keys(item)].list.map(i =>{
                                        return (
                                            <span>{i}</span>
                                        )
                                    })}
                                  </div>  
                                </div>

                            )
                        })
                        :null
                    }
                    
                </AppScroll>

            </div>
        );
    }
    // changAction=()=>{
    //     this.props.history.push('/classify/classifylist/12');
    // }
}
