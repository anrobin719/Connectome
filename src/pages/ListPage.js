import React, { Fragment } from 'react';
import SearchBanner from '../components/list/SearchBanner/SearchBanner';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import ListContents from '../components/list/ListContents/ListContents';

const ListPage = () => {
    return (
        <Fragment>
            <SearchBanner />
            <PageWrapper>
                <ListContents />
            </PageWrapper>
        </Fragment>
    );
};

export default ListPage;