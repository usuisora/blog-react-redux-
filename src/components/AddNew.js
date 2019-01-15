import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPost}  from '../actions/addpost'

 class AddNew extends Component {
    state = {
        title: '',
        text : ''
    }
    handleChange =(e) =>{
        this.setState({
          //  ...this.state,
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) =>{
         e.preventDefault();
        console.log(this.state);
        var post ={
            title: this.state.title,
            text : this.state.text
        }
        if(post.title !== '' && post.text !== ''){
            this.props.addPost(post)
            this.props.history.push('/')
        }
        
        
    }
  render() {
    return (
      <div className='container section'>
          <h3 className='grey-text text-darken-2'>Add new post</h3>
        <form  onSubmit={this.handleSubmit}>
            <div className="input-field">
                <label htmlFor="title" >Title</label>
                <input type="text" id='title' onChange={this.handleChange}/>
            </div>
            <div className='input-field'>
                <label htmlFor="post-content" >Textarea</label>
                <textarea name="post-content" id="text" className='materialize-textarea' onChange={this.handleChange}></textarea>
            </div>

            <button className=' btn red darken-2 z-depth-0'>Add</button>
        </form>
        </div>
     
    )
  }
}

var mapDispatchToProps=(dispatch)=>{
    return {
        addPost : (post) =>{dispatch(addPost(post))}
    }
   }
   


export default connect(null,mapDispatchToProps)(AddNew)