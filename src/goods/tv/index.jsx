import React from 'react'
import './index.css'
import {Route, Link} from 'react-router-dom'



class Topsic extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

        console.log('tv子组件的componentDidMount生命周期')
    }

    render(){


        return(
            <div>{this.props.ind}</div>
        )
    }
}

class Index extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            index: 1
        }
    }


    componentWillReceiveProps(){
        console.log('TV子组件的componentWillReceiveProps')
    }

    handle(){
        this.setState({
            index:44444
        })
    }


    render() {

        let match = this.props.match;
        
        return(
            <div className = 'tv'>
                <button onClick = {this.handle.bind(this)}>点击触发</button>
                <ul>
                    <li>
                        <Link to={`${match.url}/aaa`}>aaa</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/bbb`}>bbb</Link>
                    </li>
                </ul>

                <Route path={`${match.path}/:topid`} render={() => (<Topsic ind = {this.state.index}/>)}/>
            </div>
        )
    }
}

// function topsic({match}){   //当路由路径和当前路径成功匹配，会生成一个对象match。match对象有更多关于URL和path的信息。
//     // console.log(match,'ll')
//     return(
        
//         <div>{match.params.topid}</div>
//     )
// }



export default Index;