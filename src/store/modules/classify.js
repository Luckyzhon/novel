
import api from '../../utils/api'
import {get} from '../../utils/request'

//type
const SET_CLASSIFYDATA = 'classify/set_classify';



//state
const initialState = {
    classifyCount:{},
}

//reduce
export default (state = initialState , action)=>{

    switch (action.type) {
        case SET_CLASSIFYDATA:
            return{
                ...state,
                classifyCount:action.value,
                 
            }
    
        default:
            return state;
    }
}

//同步action
const setClassifyData = (value)=>({
    type:SET_CLASSIFYDATA,
    value
})


//异步action
export const requestClassifyAction =() => async(dispatch)=>{
    let {data} = await get (api.CLASSIFY_API);
    // console.log(await get (api.CLASSIFY_API));
    // dispatch(setClassifyData(data));
    console.log(dispatch(setClassifyData(data)));  
    console.log(data);

}




