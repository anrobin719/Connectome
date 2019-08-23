import React, { Fragment } from 'react';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import Banner from '../components/home/Banner/Banner';
import TagContents from '../components/list/TagContents/TagContents';
import HomeContents from '../components/home/HomeContents/HomeContents';

const HomePage = () => {
    return (
        <Fragment>
            <Banner />
            <PageWrapper>
                <TagContents />
                <HomeContents />
            </PageWrapper>
        </Fragment>
    );
};

export default HomePage;