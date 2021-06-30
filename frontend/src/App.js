import React from 'react'
import { Redirect, Route } from "react-router-dom"
import { Login, Signup, UserDetail, UserList, UserEdit } from 'user'
import { PostWrite, PostList, PostDelete, PostRetrieve, PostUpdate } from 'board'
import { Home, Member, Item, Board, Stock} from 'templates'
import { Nav } from 'common'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (<div>
    <Router>
        <Nav/>
        <Route exact path='/home' component={Home}/>
        <Redirect exact from={'/'} to={'/home'}/>
        <Route exact path='/member' component={Member}/>
        <Route exact path='/member/login' component={Login}/>
        <Route exact path='/member/signup' component={Signup}/>
        <Route exact path='/member/detail' component={UserDetail}/>
        <Route exact path='/member/edit' component={UserEdit}/>
        <Route exact path='/member/list' component={UserList}/>
        <Route exact path='/item' component={Item}/>
        <Route exact path='/board' component={Board}/>
        <Route exact path='/board/list' component={PostList}/>
        <Route exact path='/board/register' component={PostWrite}/>
        <Route exact path='/board/retrieve' component={PostRetrieve}/>
        <Route exact path='/board/update' component={PostUpdate}/>
        <Route exact path='/board/delete' component={PostDelete}/>
        <Route exact path='/stock' component={Stock}/>
    </Router>
  </div>)
}

export default App