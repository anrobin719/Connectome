import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

const NavigationItem = ({link, exact, children}) => {
    return (
        <li className={cx('NavigationItem')}>
            <NavLink to={link} exact={exact} activeClassName={cx('active')}>{children}</NavLink>
        </li>
    );
};

export default NavigationItem;