import React from 'react';

class Radio extends React.Component{


    componentDidMount(){
        console.log('Radio子组件componentDidMount')
    }

    componentWillReceiveProps(){
        console.log('Radio子组件componentWillReceiveProps')
    }

    shouldComponentUpdate(){
        console.log('Radio子组件shouldComponentUpdate')
        return true
    }

    render(){
        console.log('Radio子组件更新')
        return <div>Radio---</div>
    }
}

export default Radio;