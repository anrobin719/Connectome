import React from 'react';

import PageWrapper from '../../../hoc/PageWrapper/PageWrapper';
import classes from './Footer.scss';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <PageWrapper>
                <div className={classes.footerBox}>
                    <h4>Contact us</h4>
                    <p>anrobin719@gmail.com</p>
                    <div>⎈</div>
                    <span>Copyright © 2019 Jihye An,  All rights reserved.</span>
                </div>
            </PageWrapper>
        </div>
    );
};

export default Footer;