import React from 'react';

import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import classes from './ApplyModal.scss';

const ApplyModal = ({ show, title, myTalent, yourTalent, applySubmit, cancelHandler }) => {
    return (
        <Modal show={show} modalClosed={cancelHandler}>
            <div className={classes.ApplyModal}>
                <div className={classes.contentBox}>
                    <div>
                        <h2>{title}</h2>
                        <div className={classes.talentBox}>
                            <div className={classes.talent}>글쓴이 보유재능 : &nbsp;{myTalent}</div>
                            <div className={classes.talent}>내 보유재능 : &nbsp;{yourTalent}</div>
                        </div>
                    </div>
                </div>
                <h4>재능 교환을 신청하시겠습니까?</h4>

                <div className={classes.btnBox}>
                    <div>
                        <Button onClick={applySubmit} theme="point-big">신청하기</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ApplyModal;