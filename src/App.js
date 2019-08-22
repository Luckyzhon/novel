import React, { lazy, Suspense } from 'react'
import {BrowserRouter as Router,  Route, Redirect} from 'react-router-dom'
import CacheRoute , {CacheSwitch} from 'react-router-cache-route' 
import { connect } from 'react-redux'
import Loading from './pages/common/Loading/Loading'
// import TabBar from './components/tab-bar/tab-bar'


// 组件懒加载
//根页面
const Home = lazy(()=>import('./pages/home/Home/Home'));
const Classify = lazy(()=>import('./pages/classify/Classify/Classify'));
const Rank = lazy(()=>import('./pages/rank/Rank/Rank'));
const Girlarea = lazy(()=>import('./pages/girlarea/Girlarea/Girlarea'));
const Boyarea = lazy(()=>import('./pages/boyarea/Boyarea/Boyarea'));
const Book = lazy(()=>import('./pages/book/Book/Book'));

//子页面
const ClassifyList = lazy(()=>import('./pages/classify/ClassifyList/ClassifyList'));
const RankList = lazy(()=>import('./pages/rank/RankList/RankList'));
const BookList = lazy (()=>import('./pages/book/Booklist/Booklist'));
const Detail = lazy (()=>import('./pages/common/Detail/Detail'));



const NotFind = lazy(()=>import('./pages/common/NotFind/NotFind'));
const Login = lazy(()=>import('./pages/common/Login/Login'));





const AppPanel = (props)=>{
  return (
   
      <div className="app">
        {/* 根页面 */}
        <CacheSwitch>
          <Route path="/" exact render={()=>{
            return <Redirect to="/home"/>
          }}/>

          
          <CacheRoute path='/home' component={Home}/>

          <CacheRoute path='/classify' component={Classify}/>
          <CacheRoute path='/rank' component={Rank}/>
          <CacheRoute path='/girlarea' component={Girlarea}/>
          <CacheRoute path='/boyarea' component={Boyarea}/>
          <CacheRoute path='/book' component={Book}/>
          <Route component={NotFind}/>
        </CacheSwitch>
          {/* 子页面 */}
          {/*分类*/}
          <Route path='/classify/classifylist/:id' component={ClassifyList}/>
          <Route path='/classify/classifylist/detail/:id' component={Detail}/>
           {/*排行*/}
          <Route path='/rank/ranklist/:flag' component={RankList}/>
          <Route path='/rank/ranklist/detail/:id' component={Detail}/>
          {/*女频*/}
          <Route path='/rank/ranklist/detail/:id' component={Detail}/>
          {/*男频*/}
          <Route path='/rank/ranklist/detail/:id' component={Detail}/>
           {/*书单*/}
          <Route path='/book/booklist/:id' component={BookList}/>
          <Route path='/book/booklist/detail/:id' component={Detail}/>

        {/* <TabBar /> */}
        
      </div>
  
  )
}

const App = (props)=>{
  return (
    <Router>
    <Suspense fallback={<Loading/>}>
    <AppPanel /> 
      {/* {props.isLogin ? <AppPanel /> : <Login />} */}
    </Suspense>
    </Router>
  );
}

const mapStateToProps = (state)=>({
  // isLogin: state.user.isLogin
})
const mapDispatchToProps = ()=>({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);