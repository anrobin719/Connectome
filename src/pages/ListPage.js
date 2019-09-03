import React, { Fragment } from 'react';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import PostCards from '../containers/list/PostCards/PostCards';
import SearchBanner from '../components/list/SearchBanner/SearchBanner';

const ListPage = ({match, location}) => {
    const { search, tag1, tag2 } = match.params;
    console.log(match);
    return (
        <Fragment>
            <SearchBanner />
            <PageWrapper>
                <PostCards search={search} tag1={tag1} tag2={tag2}/>
            </PageWrapper>
        </Fragment>
    );
};

export default ListPage;