import React from 'react'
import Tv from './tv/index.jsx'
import Computer from './computer/index.jsx'
import {Router, Route, Link} from 'react-router'


class Index extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Tv/>
                <Computer/>
            </div>
        ) 
    }
}

export default Index;
