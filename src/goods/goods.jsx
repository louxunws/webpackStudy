import React from 'react'
import Tv from './tv/index.jsx'
import Computer from './computer/index.jsx'
import {Router, Route, Link} from 'react-router'
import Radio from './radio/index.jsx'


class Index extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            selsectData:undefined,
            data: 'opp'
        }
    
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        // return nextState.data != this.state.data
        return true
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate','this.stateS数据',this.state)
        console.log('nextProps', nextState)
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    bundle(){
        console.log('函数触发')
        this.setState({
            data: 'uoo'
        })
    }

    

    render() {
        console.log('父组件render了','this.stateS数据',this.state)
        console.log('render更新', this.state.data)
        return(
            <div>
                <p>{this.state.data}</p>
                <button
                    onClick = {this.bundle.bind(this)}
                >点击修改state</button>

                <Tv
                    match = {this.props.match}
                />

                <Computer
                    data = {this.state.data}
                />

                <Radio/>
            </div>
        ) 
    }
}



export default Index;
