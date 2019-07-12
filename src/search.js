import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import logo from './images/3A989HRQEA3A(TH{LF3MW_J.png'

class Search extends React.Component{
    render(){
        return <div className = 'search'>中国人民万岁一二三了大卡司打开附件十点零分咖啡空间斤斤计较 
            <img src={ logo } />
        </div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)