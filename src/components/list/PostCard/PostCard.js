import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import moment from 'moment';
import classes from './PostCard.scss';

const PostCard = ({ id, title, sub, img, publishedDate, myTalent, yourTalent }) => {
    return (
        <div className={classes.paddingWrapper}>
            <div className={classes.PostCard}>
                <Link to={`/post/${id}`}>
                    <CardImg img={img}/>
                    <div className={classes.contentBox}>
                        <span>#{myTalent}</span>
                        <span>#{yourTalent}</span>
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
    width: 100%;
    padding-bottom: 70%;
    background: url(${props => props.img}) no-repeat center/cover;
`;

export default PostCard;