import React from 'react'
import { Redirect, Route } from "react-router-dom"
import { Login, Signup, UserDetail, UserList, UserEdit } from 'user'
import { Home, Member, Item, Blog, Stock} from 'templates'
import { Nav } from 'common'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'

const App = () => {
  return (<div>
    <Router>
        <Nav/>
        <nav style={{width: '500px', margin:'0 auto'}}>
          <ol>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/member'>Member</Link></li>
            <li><Link to='/item'>Item</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/stock'>Stock</Link></li>
          </ol>
        </nav>
        <Route exact path='/home' component={Home}/>
        <Redirect exact from={'/'} to={'/home'}/>
        <Route exact path='/member' component={Member}/>
        <Route exact path='/member/login' component={Login}/>
        <Route exact path='/member/signup' component={Signup}/>
        <Route exact path='/member/detail' component={UserDetail}/>
        <Route exact path='/member/edit' component={UserEdit}/>
        <Route exact path='/member/list' component={UserList}/>
        <Route exact path='/item' component={Item}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/stock' component={Stock}/>
    </Router>
  </div>)
}

export default App