import React from 'react';
import { Link } from 'react-router-dom';

import classes from './TagCard.scss';


const TagCard = ({link, image, title}) => {
    return (
        <Link className={classes.TagCard} to={link}>
            <div className={classes.TagImgBox}>
                <img src={image} align="middle" width="100%" height="100%" alt={title} />
            </div>
            <span>{title}</span>
        </Link>
    );
};

export default TagCard;