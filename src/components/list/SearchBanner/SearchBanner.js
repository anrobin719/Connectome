import React from 'react';
import PageWrapper from '../../../hoc/PageWrapper/PageWrapper';
import Button from '../../UI/Button/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import classes from './SearchBanner.scss';

const SearchBanner = () => {
    return (
        <div className={classes.SearchBanner}>
            <PageWrapper>
                <div className={classes.searchBox}>
                    <form className={classes.searchBoxForm}>
                        <div className={classes.inputBox}>
                            <div className={classes.input}>
                                <label>내 재능</label>
                                <div>
                                    <input placeholder="교환할 당신의 재능을 입력하세요."/>
                                </div>
                            </div>
                            <div className={classes.betweenInput}>
                                <label>&nbsp;</label>
                                <div className={classes.switchBtn}>
                                    <Button>〈 〉</Button>
                                </div>
                            </div>
                            <div className={classes.input}>
                                <label>교환 재능</label>
                                <div>
                                    <input placeholder="교환 받기 원하는 재능을 입력하세요."/>
                                </div>
                            </div>
                        </div>
                        
                        <div className={classes.btnBox}>
                            <Button theme="point">
                                재능 검색
                                <div className={classes.searchIcon}>
                                    <ArrowForwardIosIcon style={{ fontSize: 14 }}/>
                                </div>
                            </Button>
                        </div>

                    </form>
                </div>
            </PageWrapper>
        </div>
    );
};

export default SearchBanner;