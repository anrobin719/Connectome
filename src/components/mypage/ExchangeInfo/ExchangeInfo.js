import React from 'react';

import Button from '../../UI/Button/Button';
import Loading from '../../UI/Loading/Loading';
import classes from './ExchangeInfo.scss';

const ExchangeInfo = ({ applied, received, loading, acceptHandler }) => {
    const appliedList = applied.map(booking => {
        return (
            <div className={classes.list} key={booking.bookingId}>
                <h4>{booking.postTitle}</h4>
                <Button extraStyle={{cursor: 'default'}}>{booking.status}</Button>
            </div>
        );
    });
    const receivedList = received.map(booking => {
        let acceptBtn = null;
        if(booking.status !== "Accepted!") {
            acceptBtn = <Button theme="invert" onClick={() => acceptHandler(booking.bookingId, booking)}>수락하기</Button>
        } else {
            acceptBtn = <Button theme="disabled">수락완료</Button>
        }
        return (
            <div className={classes.list} key={booking.bookingId}>
                <h4>{booking.postTitle}</h4>
                <p>신청자 이메일 :&nbsp;{booking.applicantEmail}</p>
                {acceptBtn}
            </div>
        );
    });
    
    return (
        <div className={classes.ExchangeInfo}>
            { loading ? <Loading extraClass="fit"/> : (
                <div className={classes.contentBox}>
                    <h2>내가 신청한 재능</h2>
                    <section className={classes.listBox}>
                        {appliedList}
                    </section>

                    <h2>신청 받은 재능</h2>
                    <section className={classes.listBox}>
                        {receivedList}
                    </section>
                </div>
            )}
        </div>
    );
};

export default ExchangeInfo;