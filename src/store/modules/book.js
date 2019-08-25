import {getBook} from '../../utils/request'
import api from '../../utils/api'
// state初始化
 
const init = {
    bookData : []
}

export default (state = init, action)=>{
    switch (action.type) {
        case 'change_book_data':
            return {
                ...state,
                bookData:action.val
            }
        default:
            return state;
    }
    
}

const getData=(value)=>{
   return {
        type:'change_book_data',
        val:value
   }
}

export const requestBookData=()=>async (dispatch)=>{
    let data = await getBook(api.BOOKLIST_API);
    
        dispatch(getData(data.data))
     
        // console.log(data.data)
}