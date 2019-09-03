import React, { Fragment } from 'react';
import SearchBanner from '../components/list/SearchBanner/SearchBanner';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import PostCards from '../containers/list/PostCards/PostCards';

const ListPage = ({match}) => {
    const { search } = match.params;
    console.log(search);
    return (
        <Fragment>
            <SearchBanner />
            <PageWrapper>
                <PostCards search={search} />
            </PageWrapper>
        </Fragment>
    );
};

export default ListPage;