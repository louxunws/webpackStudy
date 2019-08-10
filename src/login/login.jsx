import React from 'react'

class Index extends React.Component{

    

    push(){
        window.appHistory.push({
            pathname:'/goods'
        })
    }

    render(){
        console.log(this.props.match,'login match')
        return(
            <div>
                <p>{1111111}</p>
                我是登录页面
                <button type='button'>点击跳转</button>
            </div>
        )
    }
}

export default Index;