import React from 'react';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import PostContainer from '../containers/Post/PostContainer';

// const PostPage = ({match}) => {
const PostPage = () => {
    // const { id } = match.params;
    const id = '-LnVd_C6ZCG3KFx4lOck';
    return (
        <PageWrapper>
            <PostContainer id={id}/>
        </PageWrapper>
    );
};

export default PostPage;