import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames/bind';
import BackDrop from '../../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.scss';

const cx = classNames.bind(classes);

const SideDrawer = ({show, hide, onShowModal, onLogout, isAuthenticated}) => {
    let attachedClasses = ['SideDrawer', 'hide'];
    if(show) {
        attachedClasses = ['SideDrawer', 'show'];
    }
    return (
        <Fragment>
            <BackDrop show={show} clicked={hide}/>
            <div className={cx(attachedClasses)} onClick={hide}>
                <NavLink activeClassName={cx('logo')} to="/">
                    <span>⎈</span>
                    <span> connectome</span>
                </NavLink>
                <nav>
                    <NavigationItems
                        onShowModal={onShowModal}
                        onLogout={onLogout}
                        isAuthenticated={isAuthenticated}
                    />
                </nav>
            </div>
        </Fragment>
    );
};

export default SideDrawer;