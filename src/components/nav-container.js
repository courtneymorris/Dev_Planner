import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Open Plans
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/add-new" activeClassName="nav-link-active">
                        Add New Plan
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/finished-projects" activeClassName="nav-link-active">
                        Finished Projects
                    </NavLink>
                </div>
            </div>
        )
    }
}