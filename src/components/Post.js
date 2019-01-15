import React , {Component} from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../actions/deletePost'
class Post extends Component{
  handleClick=(e)=>{
      this.props.deletePost(this.props.match.params.post_id)
      this.props.history.push('/')
  }
 render(){
     console.log(this.props)
   
     var LoadPost =this.props.post ? (
         <div className="container">
             <h1 className='center'>{this.props.post.title}</h1>
             <p>{this.props.post.body}</p>
             <div className="center">
             <button onClick = {this.handleClick} className="center btn grey ">Delete post</button>
             </div>
            
         </div>
     ) : (
         <div>Loading...</div>
     )
    
     return(   
              <div>{LoadPost} </div> 
     )
 }
}

var mapStateToProps = (state, ownProps)=>{
    var id  = ownProps.match.params.post_id
    console.log(id)
   var post = state.posts.find(post=> post.id === parseInt(id))
    return{
        post
    }
}
var mapDispatchToProps=(dispatch)=>{
 return {
     deletePost : (id) =>{dispatch(deletePost(id))}
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post)