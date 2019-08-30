import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import moment from 'moment';
import classes from './PostCard.scss';

const PostCard = ({ id, title, sub, img, publishedDate, tags }) => {
    return (
        <div className={classes.paddingWrapper}>
            <div className={classes.PostCard}>
                <Link to={`/post/${id}`}>
                    <div className={classes.imgBox}>
                        <CardImg img={img}/>
                    </div>
                    <div className={classes.contentBox}>
                        <span>{tags}</span>
                        <h4>{title}</h4>
                        <h6>{sub}</h6>
                        <p>{moment(publishedDate).format('lll')}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

const CardImg = styled.div`
    width: auto;
    height: 100%;
    background: url(${props => props.img}) no-repeat center/cover;
`;

export default PostCard;