import React from 'react';
import classesHeader from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
 const click = ()=>{
    props.logout();
 }
    return (
        <header className={classesHeader.Header}>
            <img className={classesHeader.Header__img} src="../../../images/logo.ico"></img>
            {/* <textarea className={classesHeader.search} name="" id="" placeholder='Поиск'></textarea> */}
            <NavLink  className={classesHeader.btn} to="/FindUsers"> Люди </NavLink>
            <NavLink  className={classesHeader.btn} to="/communities"> Сообщества </NavLink>
            <NavLink  className={classesHeader.btn} to="/games"> Игры </NavLink>
            <NavLink  className={classesHeader.btn} to="/music"> Музыка </NavLink>
            <NavLink  className={classesHeader.btn} to="/help"> Помощь </NavLink>

                {props.isAuth
                    ? <> 
                        <div className={classesHeader.btn}> {props.login} </div>
                        <div className={classesHeader.btn} onClick={click}> Выйти</div>
                    </>
                    : <NavLink to={'/login'} className={classesHeader.btn}> Войти </NavLink>}

        </header>
    );
}

export default Header;


// {props.isAuth?
//     (<div> props.login</div>):
//     (<div> Войти</div>)
// }