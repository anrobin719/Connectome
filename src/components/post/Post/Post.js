import React from 'react';

import moment from 'moment';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import PostBody from '../PostBody/PostBody';
import classes from './Post.scss';

const Post = ({ title, sub, myTalent, yourTalent, body, img, publishedDate, editPostHandler, removePostHandler }) => {

    return (
        <div className={classes.Post}>
            <section className={classes.postHead}>
                {/* 사진 영역 */}
                <div className={classes.headImg}>
                    <CardImg img={img}/>
                </div>
                
                {/* 사진 오른쪽 소개 영역 */}
                <div className={classes.headContent}>
                    <div className={classes.headContentTitleBox}>
                        <h2>{title}</h2>
                        <p>{sub}</p>
                    </div>
                    <div className={classes.headContentBtnBox}>
                        <Button extraStyle={{height: '3rem'}} to="/" theme="invert-full">재능 교환하기</Button>
                    </div>
                </div>
            </section>
            <section className={classes.postBody}>
                {/* 본문 영역 */}
                <div className={classes.bodyContent}>
                    <h2>{title}</h2>
                    <div className={classes.talentBox}>
                        <div className={classes.talent}>보유재능 {myTalent}&nbsp; &nbsp;〉 희망재능 {yourTalent}</div>
                    </div>
                    {/* 본문 - html 렌더링 영역 */}
                    <PostBody body={body}/>

                    <div className={classes.ctrBox}>
                        <p>{moment(publishedDate).format('lll')}</p>
                        <button onClick={editPostHandler}>수정</button>
                        <button onClick={removePostHandler}>삭제</button>
                    </div>

                    <div className={classes.bodyContentBtnBox}>
                        <Button to="/" theme="outline-big">재능 교환하기</Button>
                    </div>
                </div>
                {/* 본문 오른쪽 정보 영역 */}
                <div className={classes.bodyInfo}>
                    <div className={classes.bodyInfoContentBox}>
                        <p>
                            이메일<br/>
                            anrobin719@gmail.com
                            <br/><br/>
                            활동분야<br/>
                            웹개발, UX/UI 디자인
                        </p>
                    </div>
                </div>
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