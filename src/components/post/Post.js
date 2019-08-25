import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button/Button';

import classes from './Post.scss';

    // <PostCard
    //     id="id123"
    //     title="제목입니다"
    //     sub="부연설명입니다. 블록체인/암호화폐 개발 컨설팅 및 공유해 드립니다. 기존 비트코인, 이더리움 등"
    //     body="post body"
    //     img="https://images.unsplash.com/photo-1554731617-8eafa9975365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
    //     publishedDate="2019-08-22"
    //     tags="#개발 #UX/UI #IOS"
    // />

const Post = () => {

    const postData = {
        id: "id123",
        title: "제목입니다",
        sub: "부연설명입니다. 블록체인/암호화폐 개발 컨설팅 및 공유해 드립니다. 기존 비트코인, 이더리움 등",
        body: `같은 생명을 장식하는 꽃이 밝은 공자는 곳으로 것이다. 이것이야말로 길을 천자만홍이 영락과 간에 끓는다. 원질이 풍부하게 투명하되 피부가 것이다. 품고 가치를 열락의 이상은 끓는다. 크고 밥을 우리 넣는 예가 생의 것이다. 생명을 귀는 따뜻한 것이다. 방지하는 작고 같이 있는가? 노래하며 속잎나고, 불러 찾아 그들은 청춘을 생명을 봄바람이다. 따뜻한 보이는 산야에 뿐이다. 어디 피가 듣기만 힘있다.`,
        img: "https://images.unsplash.com/photo-1554731617-8eafa9975365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80",
        publishedDate: "2019-08-22",
        tags: "#개발 #UX/UI #IOS"
    }

    return (
        <div className={classes.Post}>
            <section className={classes.postHead}>
                <div className={classes.headImg}>
                    <CardImg img="https://images.unsplash.com/photo-1554731617-8eafa9975365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"/>
                </div>
                
                <div className={classes.headContent}>
                    <div className={classes.headContentTitleBox}>
                        <h2>{postData.title}</h2>
                        <p>{postData.sub}</p>
                    </div>
                    <div className={classes.headContentBtnBox}>
                        <Button extraStyle={{height: '3rem'}} to="/" theme="invert-full">재능 교환하기</Button>
                    </div>
                </div>
            </section>
            <section className={classes.postBody}>
                <div className={classes.bodyContent}>
                    <h2>{postData.title}</h2>
                    {/* post body */}
                    <p>{postData.body}</p>
                    <p>{postData.body}</p>
                    <p>{postData.body}</p>

                    <div className={classes.bodyContentBtnBox}>
                        <Button to="/" theme="outline-big">재능 교환하기</Button>
                    </div>
                </div>
                {/* <div className={classes.bodyInfo}>
                    <div className={classes.bodyInfoContentBox}>
                        <h4>재능 제공자 정보</h4>
                        <p>
                            이메일<br/>
                            anrobin719@gmail.com
                            <br/><br/>
                            활동분야<br/>
                            웹개발, UX/UI 디자인
                            <br/><br/>
                        </p>
                    </div>
                </div> */}
            </section>
        </div>
    );
};

const CardImg = styled.div`
    width: auto;
    height: 100%;
    background: url(${props => props.img}) no-repeat center/cover;
`;

export default Post;