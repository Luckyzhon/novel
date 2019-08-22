import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

export default (props)=>{
    const navList = [
        {id: 1, name: '分类', path: '/classify',icon:'icon-leimupinleifenleileibie1'},
        {id: 2, name: '排行', path: '/rank',icon:'icon-paihang'},
        {id: 3, name: '女频', path: '/girlarea',icon:'icon-nvxing'},
        {id: 4, name: '男频', path: '/boyarea',icon:'icon-lujing'},
        {id: 5, name: '书单', path: '/book',icon:'icon-shudan'}
    ];
    return (
        <nav className="tab-bar">
        {
            navList.map(item=>(
                <NavLink className="tab-item" key={item.id} to={item.path}>
                <span className={`iconfont nomal ${item.icon}`}></span>
                {/* <span className={`iconfont select` }></span> */}
                  
                  <h3>  {item.name} </h3>
                </NavLink>
            ))
        }
        </nav>
    )
}