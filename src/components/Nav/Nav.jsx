import React from 'react';
import classesNav from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className={classesNav.nav}>
                
            <div> <NavLink className= {({isActive})=>isActive ? classesNav.activeLinkClassName : classesNav.defaultLinkClassName} to="/profile"> Profile</NavLink></div>
            <div> <NavLink className= {({isActive})=>isActive ? classesNav.activeLinkClassName : classesNav.defaultLinkClassName} to="/message"> Messege</NavLink></div>
            <div> <NavLink className= {({isActive})=>isActive ? classesNav.activeLinkClassName : classesNav.defaultLinkClassName} to="/myFriends"> My Friends</NavLink></div>
            <div> <NavLink className= {({isActive})=>isActive ? classesNav.activeLinkClassName : classesNav.defaultLinkClassName} to="/findUsers"> Find Users</NavLink></div>
            <div> <NavLink className= {({isActive})=>isActive ? classesNav.activeLinkClassName : classesNav.defaultLinkClassName} to="/news"> News</NavLink></div>
            <div> <NavLink className= {({isActive})=>isActive ? classesNav.activeLinkClassName : classesNav.defaultLinkClassName} to="/music"> Music</NavLink></div>
            <div> <NavLink className= {({isActive})=>isActive ? classesNav.activeLinkClassName : classesNav.defaultLinkClassName} to="/settings"> Settings</NavLink></div>



            <div> <NavLink className= {({isActive})=>isActive ? classesNav.activeLinkClassName : classesNav.defaultLinkClassName} to="/debugging"> debugging </NavLink></div>

        </nav>
    );
};

export default Navbar;