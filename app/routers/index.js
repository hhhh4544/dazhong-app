import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../containers/Home'
import Detail from '../containers/Detail'

import Login from '../containers/Login'
import User from '../containers/User'
//exact 绝对匹配   Switch只匹配一次
import City from '../containers/City'
import Search from '../containers/Search'
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>
                        <Route path='/login/:route?' component={Login}></Route>
                        <Route path='/user' component={User}></Route>
                        <Route path='/city' component={City}></Route>
                        <Route path='/search/:kind/:keyword?' component={Search}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

