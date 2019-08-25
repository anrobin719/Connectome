import React from 'react';
import classes from './Banner.scss';
import PageWrapper from '../../../hoc/PageWrapper/PageWrapper';
import Button from '../../UI/Button/Button';

const Banner = () => {
    return (
        <div className={classes.Banner}>
            <PageWrapper>
                <div className={classes.bannerContentBox}>
                    <div className={classes.bannerContent}>
                        <h2>
                            함께 성장할 수 있는<br/>
                            가장 쉬운 방법
                        </h2>
                        <div>
                            <Button to="/edit" theme="point-big">재능 교환하기</Button>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
};

export default Banner;