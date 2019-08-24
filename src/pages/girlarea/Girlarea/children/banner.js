import React, { Component } from 'react'
import api from '../../../../utils/api'


export default class Banner extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        fetch(api.GIRLCHANNEL_API).then((res)=>{
            return res.json();
        }).then((result)=>{
            let {module} = result.data;
            console.log(module[6].content.data)
            (module[6].content.data).map(item=>{
                return(item)
            })
            this.setState({
                
            })
        }).catch((err) =>{
            console.log('请求失败');
            console.log(err);
        });
        
    }
}



