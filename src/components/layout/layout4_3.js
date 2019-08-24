import React, { Component } from 'react';
import './style.scss'

class layout4_3 extends Component {
    render() {
        let bookList = this.props.list;
        console.log(bookList);
        let itemList4 = bookList.length > 0 ? bookList[0].slice(0, 4).map((item) => 
                            <li className="item" key={item.bid}>
                                <img src={item.book_cover} alt="" />
                                <p>{item.bookname}</p>
                                <span>{item.author_name}</span>
                            </li>
                        ) : []

        let itemList3 = bookList.length > 0 ? bookList[0].slice(-3).map((item) =>
                            <div className="item-box" key={item.bid}>
                                <div className="item-title">
                                    <h3>{item.bookname}</h3>
                                    <p>
                                        <span className="co">{item.stat_name}</span>
                                        <span>{item.class_name}</span>
                                    </p>
                                </div>
                                <p className="item-desc">
                                    {item.book_info}
                                </p>
                            </div>
                        ) : []
        return (
            <div className="wrapper">
                <div className="title">
                    <h3><span className="icon"></span>{this.props.title}</h3>
                </div>
                <ul className="list">
                    {itemList4}
                </ul>
                <div className="wrap-list">
                    <div className="wrap-item">
                        {itemList3}
                    </div>
                </div>
                <div className="change">
                    <span>换一换</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAATlBMVEUAAACZmZmampqampqbm5uampqampqampqbm5uenp6dnZ2ZmZmbm5udnZ2ZmZmampqampqampqampqampqampqampqampqcnJyampqZmZnzhHdqAAAAGXRSTlMA7GhWOq2HwkMPF/UxIeG5kXJf0st5TCig0LILkwAAAmxJREFUWMOtmNmSsyAQhQ+IRlHcl+H9X/RfaJFJFCH43UzVpKqht9Mt8NHwIp9apjVrp7zgDb6h4jnTb7CcS8SR5fqCLkM4vNUe2FAhiJFc8pnCPc1LBzAJ3LBoh7orRqEkUCkxFl3t/tbDh3Suw/oSb4je8XpWHreOIL8ukrMeR7ESF5TMmilxiThMXRxW2KPGmyKzB/LT+2gil7dVn9s7eS60BJXsnsGTGIwm4x+/+OPJTnI3/fu/QCANWZpPPF9+hgaItdQjlZLiJJAKp75DMlQFA1KpmMlchVSyp66El7kSkhHUKU9dqUMyq7mSBJB1Q0rUTeK4KQaW4GNvpGc32SeGmwGbJpPfYjquQbbLtMR3dBSkxSq1iOqOsvmlrAU1HlkNZqz/+qAcZc3hTugfBKKMD+sR7QmtdphVlBLpwhptTfb90/NsUBCdREX5JwPW1BIoREQryAL9UUeoCliCtgRyk1yTx8CugzqP9hYLo2ArZ4XYIprM0mKyI0VGyh3/lW8qyJGKNErthJPxHIUb4W1ZNoQjZyfZPEkrf3ZDKxqTKnzJQIbUrpUibbQxI7VpEtmSLvLUGVcV7L8CyT1aCShHK194ahMQSIY9daXhsU3gsX1p2BsvmWmfR6kI+0EQwTbw6kruWBNXNa3EO3OspbI+H6mKRQ02ZDUp7NkJERFfPJ/ImZXf23qSnSY2z1S43wS5Ff3s0m/iJTxRtopfr97PQjK1Xhw265DNTM3uA4L4OIgeEEJ2xf7zSaPanzS0S3HbLZMOYA4p3IHdmWl54Fjwm2JDjI536U9jhIx8rAt7PqzZlBejN8B/AE4kdM269CdQAAAAAElFTkSuQmCC" alt="" />
                </div>
            </div>
        );
    }
}

export default layout4_3;