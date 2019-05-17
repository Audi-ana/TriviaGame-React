import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style/BaseLayout.css'

class Menu extends Component{

    render(){
        return(
            <div>
                <nav>
                    <NavLink className="linkStyling" to="/">HOME</NavLink>
                    <NavLink className="linkStyling" to="/categories">Categories</NavLink>
                </nav>
            </div>
        )
    }
}

export class BaseLayout extends Component{
    render(){
        return(
            <div>
                <Menu/>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}