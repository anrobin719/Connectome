import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.scss'
import Button from '../../../UI/Button/Button';

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/page/:page" exact>재능 교환</NavigationItem>
            <NavigationItem link="/edit" exact>새글 작성</NavigationItem>
            <Button to="/auth" theme="outline" exact>Log in</Button>
        </ul>
    );
};

export default NavigationItems;