import React, { Fragment } from 'react';
import SearchBanner from '../components/list/SearchBanner/SearchBanner';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import PostCards from '../components/list/PostCards/PostCards';

const ListPage = () => {
    return (
        <Fragment>
            <SearchBanner />
            <PageWrapper>
                <PostCards />
            </PageWrapper>
        </Fragment>
    );
};

export default ListPage;