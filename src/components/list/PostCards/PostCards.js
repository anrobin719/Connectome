import React from 'react';
import classes from './PostCards.scss';
import PostCard from './PostCard/PostCard';

const PostCards = ({posts}) => {
    // const postCards = posts.map(
    //     (post) => {
    //         const { id, title, sub, body, img, publishedDate, tags } = post.toJS();
    //         return (
    //             <PostCard
    //                 id={id}
    //                 title={title}
    //                 sub={sub}
    //                 body={body}
    //                 img={img}
    //                 publishedDate={publishedDate}
    //                 tags={tags}
    //             />
    //         );
    //     }
    // );
    return (
        <div className={classes.PostCards}>
            {/* {postCards} */}
            <PostCard
                id="-LnNUEDiKVo6EWc6-2ib"
                title="제목입니다"
                sub="부연설명입니다. 블록체인/암호화폐 개발 컨설팅 및 공유해 드립니다. 기존 비트코인, 이더리움 등"
                body="post body"
                img="https://images.unsplash.com/photo-1554731617-8eafa9975365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                publishedDate="2019-08-22"
                tags="#개발 #UX/UI #IOS"
            />
            <PostCard
                id="id123"
                title="제목입니다"
                sub="부연설명입니다. 블록체인/암호화폐 개발 컨설팅 및 공유해 드립니다. 기존 비트코인, 이더리움 등"
                body="post body"
                img="https://images.unsplash.com/photo-1510511336377-1a9caa095849?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                publishedDate="2019-08-22"
                tags="#디자인 #색채"
            />
            <PostCard
                id="id123"
                title="제목입니다"
                sub="부연설명입니다. 블록체인/암호화폐 개발 컨설팅 및 공유해 드립니다."
                body="post body"
                img="https://images.unsplash.com/photo-1465225314224-587cd83d322b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                publishedDate="2019-08-22"
                tags="#음악 #기타"
            />
        </div>
    );
};

export default PostCards;