// import React from 'react';

import classesCartUser from './CartUser.module.css'

import Preloader from '../../FindUsers/UsersAPIComponent/Preloader/Preloader';
import avaDefaultUser from '../../../assets/images/images.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';

import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

import { Navigate } from 'react-router-dom'


const CartUser = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (<div>
    {/* <img className={classesCartUser.content__img} src='https://ru-drive.com/upload/resize_cache/webp/iblock/cf2/cf2e57c68625180124a0c5c5888da7c7.webp'></img> */}
    <div className={classesCartUser.cart}>
      <img className={classesCartUser.cart__img} src={props.profile.photos.small === null ? avaDefaultUser : props.profile.photos.large}></img>
      <div className={classesCartUser.cart__content}>
        <div className={classesCartUser.Name}> {props.profile.fullName}</div>
        <div className={classesCartUser.dataBritch}> Ищу работу: {props.profile.lookingForAJob ? "да" : "нет"}</div>
        <div className={classesCartUser.City}> Описание работы: {props.profile.lookingForAJobDescription}</div>
        <div className={classesCartUser.Education}> О себе: {props.profile.aboutMe}</div>
        <div className={classesCartUser.WebSite}> Контакты: gitHub- {props.profile.contacts.github}; vk - {props.profile.contacts.vk} </div>
      </div>
      <div className={classesCartUser.status}>
        Статус:
        {/* <ProfileStatus status={props.status} updateStatus={props.updateStatus} /> */}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  </div>
  );
}

export default CartUser;

