import React from 'react';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import PostContainer from '../containers/Post/PostContainer';

const PostPage = ({match}) => {
    const { id } = match.params;
    return (
        <PageWrapper>
            <PostContainer id={id}/>
        </PageWrapper>
    );
};

export default PostPage;