import React from 'react';
import PageWrapper from '../hoc/PageWrapper/PageWrapper';
import PostContainer from '../containers/Post/PostContainer';

// const PostPage = ({match}) => {
const PostPage = () => {
    // const { id } = match.params;
    const id = '-LnQry6vevtU9X2jb776';
    return (
        <PageWrapper>
            <PostContainer id={id}/>
        </PageWrapper>
    );
};

export default PostPage;