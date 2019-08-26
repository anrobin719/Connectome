import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.scss'
import Button from '../../../UI/Button/Button';

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/page/:page" exact>재능 교환</NavigationItem>
            <NavigationItem link="/edit" exact>새글 작성</NavigationItem>
            <NavigationItem link="" exact>로그인</NavigationItem>
            <div className={classes.signUpBtnBox}>
                <Button to="/auth" theme="outline" exact>회원가입</Button>
            </div>
        </ul>
    );
};

export default NavigationItems;