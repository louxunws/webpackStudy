import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import Goods from '../goods/goods.jsx'
import Login from '../login/login.jsx'
import Home from '../home/home.jsx'
import React from 'react'
import './app.css'





export default function app(){
    return (
        <Router>
            <div>
                <h1>App</h1>
                <ul>
                    <li><NavLink to = "/goods" activeClassName= 'selected' isActive = {isActive}>Goods</NavLink></li>
                    <li><NavLink to = "/login">Login</NavLink></li>
                    <li><NavLink to = "/dd">dd</NavLink></li>
                </ul>
                <hr/>
                <Route exact path = '/' component = {Home}/>
                <Route path = '/goods' component = {Goods}/>
                {/* 动态路由 */}
                <Route path = '/:ooo' component = {Login}/> 
                {/* <Route path = '/:id' component = {child}/> */}
                
            </div>
        </Router>
    )
}

function isActive(match, location){
    // console.log(match, location,'navlink')
}



// function child(match){
//     return <h1>{match}</h1>
// }