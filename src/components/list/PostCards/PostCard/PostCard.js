import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import classes from './PostCard.scss';

const PostCard = ({ id, title, sub, body, img, publishedDate, tags }) => {
    return (
        <div className={classes.PostCard}>
            <Link to={`/post/${id}`}>
                <div className={classes.ImgBox}>
                    <CardImg img={img}/>
                </div>
                <div className={classes.ContentBox}>
                    <span>{tags}</span>
                    <h4>{title}</h4>
                    <h6>{sub}</h6>
                    <p>{publishedDate}</p>
                </div>
            </Link>
        </div>
    );
};

const CardImg = styled.div`
    width: auto;
    height: 100%;
    background: url(${props => props.img}) no-repeat center/cover;

`;

export default PostCard;