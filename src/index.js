import React from 'react'
import ReactDOM from 'react-dom'
import Goods from './goods/goods.jsx'

class Search extends React.Component{
    render(){
        return <div>
            <Goods/>   
        </div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)