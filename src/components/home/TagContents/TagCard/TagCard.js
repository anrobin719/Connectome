import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import classes from './TagCard.scss';


const TagCard = ({link, image, title}) => {
    return (
        <div className={classes.paddingWrapper}>
            <div className={classes.TagCard}>
                <Link to={link}>
                    <div className={classes.TagImgBox}>
                        <TagImg img={image}/>
                        <span>{title}</span>
                    </div>
                    <p>{title}</p>
                </Link>
            </div>
        </div>
    );
};

const TagImg = styled.div`
    width: 100%;
    height: 100%;
    background: url(${props => props.img}) no-repeat center/cover;
`;

export default TagCard;