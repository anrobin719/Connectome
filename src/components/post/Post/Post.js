import React from 'react';

import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import PostBody from '../PostBody/PostBody';
import classes from './Post.scss';

const Post = ({ title, sub, myTalent, yourTalent, body, img }) => {

    return (
        <div className={classes.Post}>
            <section className={classes.postHead}>
                <div className={classes.headImg}>
                    <CardImg img={img}/>
                </div>
                
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
                <div className={classes.bodyContent}>
                    <h2>{title}</h2>
                    <div className={classes.talentBox}>
                        <div className={classes.talent}>보유재능 {myTalent}&nbsp; &nbsp;〉 희망재능 {yourTalent}</div>
                    </div>

                    <PostBody body={body}/>

                    <div className={classes.bodyContentBtnBox}>
                        <Button to="/" theme="outline-big">재능 교환하기</Button>
                    </div>
                </div>
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