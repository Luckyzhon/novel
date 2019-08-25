import React, { Component } from 'react'
import AppHeader from '../../../components/head-back/headBack'
import {connect} from 'react-redux'
import { requestBookData } from '../../../store/modules/book'
import './book.scss'
class Book extends Component {
    
    render() {
        const bookData = this.props.book_data ? this.props.book_data : []
        let bookDataList = bookData.map(item=>(
            <li className="bookList-item border-bottom " key={item.id} >
                <h4>
                    {item.title}
                </h4>
                <p>
                    {item.sdesc}
                </p>
                <span>
                    {item.tags}
                </span>
            </li>
        ))
        console.log(bookData)
        return (
            <div className="book">
               <AppHeader title='精品书单' info={this.props}/>
               <ul className='bookList'>
                    {bookDataList}
               </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.getData();
    }
}

const mapStateToProps=(state)=>({
    book_data:state.book.bookData
})

const mapDispatchToProps=(dispatch)=>({
    getData(){
        let action = requestBookData()
        dispatch(action)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Book)


