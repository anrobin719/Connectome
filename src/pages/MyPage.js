import React, { Fragment } from 'react';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import ExchangeInfoContainer from '../containers/mypage/ExchangeInfoContainer';

const MyPage = () => {
    return (
        <Fragment>
            <PageWrapper>
                <ExchangeInfoContainer />
            </PageWrapper>
        </Fragment>
    );
};

export default MyPage;