import React from 'react'
import './index.css'

class Index extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            childData : 'ooooo'
        }
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
        this.setState({
            childData : 'pppppp'
        })
    }
    


    render() {
        return(
            <div className = 'computer'>
                我是computer页面
                <p>{this.state.childData}</p>
                this.props:{this.props.color}
            </div>
        )
    }
}

export default Index;