import React, { Component } from 'react';
import "./layout1_5.scss"

class layout1_5 extends Component {
    render() {
        console.log(this.props);
        let bookList = this.props.list;
        let itemList1 = bookList.length > 0 ? bookList[0].slice(0, 1).map((item) =>
                        <div className="item1" key={item.bid}>
                            <div className="img-box">
                                <img src="{item.book_cover}" alt="" />
                            </div>
                            <div className="item1-content">
                                <h3>{item.bookname}</h3>
                                <p>{item.author_name}</p>
                                <p>{item.book_info}</p>
                                <div className="book-tag" >
                                    <span className="co">{item.stat_name}</span>
                                    {item.tag.map((el, index) => 
                                        <span key={index}>{el}</span>
                                    )}
                                </div>
                            </div>
                        </div>

        ) : []
        return (
            <div className="wrapper">
                <div className="title">
                    <h3><span className="icon"></span>{this.props.title}</h3>
                </div>

                {itemList1}
            </div>
        );
    }
}

export default layout1_5;