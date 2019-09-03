import React, { Fragment } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.scss'
import Button from '../../../UI/Button/Button';

const NavigationItems = ({onShowModal, onLogout, isAuthenticated}) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/list" exact>재능 교환</NavigationItem>
            <NavigationItem link="/edit" exact>새글 작성</NavigationItem>

            {isAuthenticated ? (
                <Button onClick={onLogout} theme="nav">
                    <div>
                        로그아웃
                    </div>
                </Button>
            ) : (
                <Fragment>
                    <Button onClick={() => onShowModal('signIn')} theme="nav">
                        <div>
                            로그인
                        </div>
                    </Button>
                    <div className={classes.signUpBtnBox}>
                        <Button onClick={() => onShowModal('signUp')} theme="outline" exact>회원가입</Button>
                    </div>
                </Fragment>
            )}
        </ul>
    );
};

export default NavigationItems;