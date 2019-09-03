import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import classes from './Button.scss';

const cx = classNames.bind(classes);

const button = ({children, ...rest}) => <button {...rest}>{children}</button>;

const Button = ({children, to, onClick, disabled, theme, extraStyle, type}) => {
    const Element = (to && !disabled) ? Link : button;

    return (
        <Element
            to={to}
            onClick={disabled ? null : onClick}
            className={cx('Button', theme, {disabled})}
            style={extraStyle}>
            {children}
        </Element>
    );
};

export default Button;