import React from 'react'
import { NavLink, withRouter} from 'react-router-dom'
const Navbar = (props) =>{
    
    // setTimeout(()=>{
    //     props.history.push('/about')
    // },2000)
    return (
        <nav className="nav-wrapper red darken-3">
          <div className="container">
            <div className="brand-logo">Poke'times</div>
                <ul className='right '>
                   <li><NavLink exact to="/">Home</NavLink></li> 
                   <li><NavLink to="/create_new"><button className="btn btn-floating white z-depth-0 red-text text-lighten-3 ">Add</button></NavLink></li>
                                     
                    <li><NavLink to="/about">About </NavLink></li>
                    <li><NavLink to="/contact">Contacts</NavLink></li>
                </ul>
          </div>
        </nav>
    )
}

export default withRouter(Navbar)