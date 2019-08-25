import React from 'react';
import PostCards from '../../../components/list/PostCards/PostCards';

import classes from './ListContents.scss';

const ListContents = () => {
    return (
        <div className={classes.ListContents}>
            <PostCards />
            <PostCards />
            <PostCards />
            <PostCards />
            <PostCards />
            
            {/* Pagination component */}
        </div>
        
    );
};

export default ListContents;