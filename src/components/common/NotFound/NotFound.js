import React from 'react';

import PageWrapper from '../../../hoc/PageWrapper/PageWrapper';
import Button from '../../UI/Button/Button';
import classes from './NotFound.scss';

const NotFound = () => {
    return (
        // 전체 배너
        <div className={classes.banner}>
            <PageWrapper>
                {/* flex 부모용 박스 */}
                <div className={classes.contentsBox}>
                    {/* 컨텐츠 : 텍스트 + 버튼 */}
                    <div className={classes.contents}>
                        {/* 에러 문구 */}
                        <h2>404 ERROR</h2>
                        <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
                        {/* 홈으로 돌아가기 버튼 */}
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