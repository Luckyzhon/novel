import React, { Component } from 'react'
import {connect} from 'react-redux'
import HeadBack from '../../../components/head-back/headBack'
import AppScroll from '../../../components/app-scroll/app-scroll';
import {requestClassifyAction} from '../../../store/modules/classify';
import ClassifyGirldata from './children/ClassifyGirldata'




 class Classify extends Component {
   
     
    render() {

        let {classify} = this.props;
 
        return (
            <div className="page"> 
              <HeadBack title="分类" info={this.props}/>
               <AppScroll>

                   <ClassifyGirldata {...classify} {...this.props}/> 
               </AppScroll>
            </div>
        )
    }
    componentDidMount(){
        this.props.requestClassify()
    }
}



const mapStateToProps = (state)=>({
    classify:state.classify.classifyCount  //state加上modules里面的名字
      
})


const mapDispatchToProps = (dispatch)=>({
    requestClassify(){
        let action = requestClassifyAction();
        dispatch(action);
            
    }
    
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Classify)