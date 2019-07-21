import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Goods from './goods/goods.jsx'
import Login from './login/login.jsx'


class Index extends React.Component{
    render(){
        return (
			
			<Goods/>
        )
    }
}

ReactDOM.render(
	<Index/>,
    document.getElementById('root')
)