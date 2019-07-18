import React from 'react'
import './index.css'

class Index extends React.Component{
    render() {
        return(
            <div className = 'computer'>
                我是computer页面
                this.props:{this.props.color}
            </div>
        )
    }
}

export default Index;