import React from 'react'
import { Redirect, Route } from "react-router-dom"
import { MemberLogin, MemberRegister, MemberDetail, MemberList, MemberModify, MemberDelete, MemberRetrieve } from 'member'
import { PostRegister, PostList, PostDelete, PostRetrieve, PostUpdate } from 'board'
import { Home, Member, Item, Board } from 'templates'
import { BrowserRouter as Router } from 'react-router-dom'
import { ItemDelete, ItemDetail, ItemList, ItemRegister, ItemRetrieve, ItemModify } from 'item'
import { MemberDetail_1 } from 'member'

const App = () => {
  return (<div>
    <Router>
        <Route exact path='/home' component={Home}/>
        <Redirect exact from={'/'} to={'/home'}/>
        <Redirect exact from={'/member/logout'} to={'/home'}/>

        <Route exact path='/member' component={Member}/>
        <Route exact path='/member/login' component={MemberLogin}/>
        <Route exact path='/member/register' component={MemberRegister}/>
        <Route exact path='/member/detail/:id' component={MemberDetail}/>
        <Route exact path='/member/modify' component={MemberModify}/>
        <Route exact path='/member/list' component={MemberList}/>
        <Route exact path='/member/delete' component={MemberDelete}/>
        <Route exact path='/member/retrieve' component={MemberRetrieve}/>

        <Route exact path='/member/detail_1/:id' component={MemberDetail_1}/>

        <Route exact path='/item' component={Item}/>
        <Route exact path='/item/detail' component={ItemDetail}/>
        <Route exact path='/item/delete' component={ItemDelete}/>
        <Route exact path='/item/list' component={ItemList}/>
        <Route exact path='/item/register' component={ItemRegister}/>
        <Route exact path='/item/retrieve' component={ItemRetrieve}/>
        <Route exact path='/item/modify' component={ItemModify}/>

        <Route exact path='/board' component={Board}/>
        <Route exact path='/board/list' component={PostList}/>
        <Route exact path='/board/register' component={PostRegister}/>
        <Route exact path='/board/retrieve' component={PostRetrieve}/>
        <Route exact path='/board/update' component={PostUpdate}/>
        <Route exact path='/board/delete' component={PostDelete}/>
    </Router>
  </div>)
}

export default App