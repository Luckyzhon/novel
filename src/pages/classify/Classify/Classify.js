import React, { Component } from 'react'
import {connect} from 'react-redux'
import AppScroll from '../../../components/app-scroll/app-scroll';
import {requestClassifyAction} from '../../../store/modules/classify';
// import ClassifyData from './children/ClassifyData'



 class Classify extends Component {
   
     
    render() {
        let {classify} = this.props;
        return (
            <div className="page"> 
              
               <AppScroll>
                   {
                    //    classify.map((item)=>)
                   }
               </AppScroll>
            </div>
        )
    }
    componentDidMount(){
        this.props.requestClassify()
    }
}





const mapStateToProps = (state)=>({
    classify:state.classifyCount
      
})


const mapDispatchToProps = (dispatch)=>({
    requestClassify(){
        let action = requestClassifyAction();
        dispatch(action);
            
    }
    
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Classify)