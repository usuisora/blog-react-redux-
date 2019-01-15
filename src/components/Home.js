import React , {Component} from 'react'
import {Link} from 'react-router-dom'
import Pokeball from '../resourses/pokeball.png'
import {connect} from 'react-redux'

class Home extends Component{



render(){
    console.log(this.props)
    const {posts} = this.props;
    const postList = posts.length ? posts.map(post=>{
         return(<div className=" post card" key={post.id}>
         <div className="card-content">
             <img src={Pokeball} alt="pokeball.png"/>
             <Link to={'/'+post.id}>
             <span className="card-title red-text">{post.title}</span>
             </Link>

             <p>{post.body}</p>
         </div>
     </div>)
    }) :(
        <div>No posts yet</div>
    )

    return (
        <div className="home container">
            <h1 className="center">Home</h1>
            <div>{postList}</div>
        </div>
     )
 }

}
var mapStateToProps=(state)=>{
    return{posts: state.posts}
}

export default connect(mapStateToProps)(Home)
