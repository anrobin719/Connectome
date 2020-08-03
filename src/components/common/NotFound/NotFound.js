import React from 'react';

import PageWrapper from '../../../hoc/PageWrapper/PageWrapper';
import Button from '../../UI/Button/Button';
import classes from './NotFound.scss';

const NotFound = () => {
    return (
        <div className={classes.banner}>
            <PageWrapper>
                <div className={classes.contentsBox}>
                    <div className={classes.contents}>
                        <h2>404 ERROR</h2>
                        <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
                        <div className={classes.btnBox}>
                            <Button
                                to="/"
                                extraStyle={{height: '2.8rem', width: 'rem'}}
                                theme="outline-white-big"
                            >홈으로 돌아가기
                            </Button>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
};

export default NotFound;