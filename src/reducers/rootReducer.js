
var initState = {
 posts:[
     {id: 1, title:'BLA is taking over', body:'erum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
     {id: 2, title:'Sonic reach out super anime speed', body:'erum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'},
     {id: 3, title:'Viva del sex in assrophisics', body:'erum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'}
    
    ]
}
function rootReducer(state=initState,action){
   if(action.type === "DELETE_POST"){
       var postList = state.posts.filter(post => parseInt(action.id) !== parseInt(post.id))
       state = {
           ...state,
           posts: postList
       }
   }
   else if(action.type === "ADD_POST"){
       var id = Math.random()*10
       var post = {
           id,
           title : action.post.title,
           body: action.post.text
       }
       state = {
           ...state,
           posts: [...state.posts,post]
       }
   }
    return state
}

export default rootReducer