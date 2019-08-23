import React from 'react';
import classes from './PageWrapper.scss';

const PageWrapper = ({children}) => {
    return (
        <div className={classes.PageWrapper}>
            {children}
        </div>
    );
};

export default PageWrapper;