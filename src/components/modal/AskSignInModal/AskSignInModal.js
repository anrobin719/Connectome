import React from 'react';

import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import classes from './AskSignInModal.scss';

const AskSignInModal = ({ show, signInSubmit, signUpSubmit, cancelHandler }) => {
    return (
        <Modal show={show} modalClosed={cancelHandler}>
            <div className={classes.AskSignInModal}>
                <h4>로그인 후에 이용하실 수 있습니다.</h4>
                <div className={classes.btnBox}>
                    <div>
                        <Button onClick={signInSubmit} theme="outline-big">로그인하기</Button>
                    </div>
                    <div>
                        <Button onClick={signUpSubmit} extraStyle={{color: '#aaa', textDecoration: 'underline'}}>회원가입</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AskSignInModal;