import React , {Component} from 'react'
import Rainbow from '../hoc/Rainbow'
class About extends Component{
render(){
    return (
        <div className="center container">
            <h1 className="center ">About</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti molestiae ipsum itaque, qui soluta magnam at id explicabo voluptates possimus omnis asperiores, totam autem praesentium animi minus eos iste debitis.</p>
        </div>
     )
 }
}

export default Rainbow(About)