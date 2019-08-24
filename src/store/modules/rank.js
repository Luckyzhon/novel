import api from '../../utils/api'
import {get} from '../../utils/request'
const CHANGE_DATA='change_data'
// state
const init={
    rankData:[]
}

export default (state = init,action)=>{
    switch (action.type) {
        case CHANGE_DATA:
            
            return {
                ...state,
                rankData:action.val
            };
    
        default:
            return state;
    }
    
}

const getData=(value)=>{
        return {
            type:CHANGE_DATA,
            val:value
        }
    }


export const requestRankData=()=> async(dispatch)=>{
   let {data} = await get(api.RANKING_API)
    // .then(result=>{
        dispatch(getData(data.module))
    // })
    console.log(data.module)
}