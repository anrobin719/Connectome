import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PageWrapper from '../../../hoc/PageWrapper/PageWrapper';
import Button from '../../UI/Button/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import classes from './SearchBanner.scss';

class SearchBanner extends Component {
    state = {
        myTalent: '',
        yourTalent: '',
    }

    onChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    switchTalent = () => {
        this.setState({
            myTalent: this.state.yourTalent,
            yourTalent: this.state.myTalent
        });
    }

    submitHandler = e => {
        e.preventDefault();
        const { history } = this.props;
        if(this.state.myTalent.length !== 0 ) {
            history.push(`/tag/${this.state.myTalent}/${this.state.yourTalent}`);
        }
    }

    render() {
        return (
            <div className={classes.SearchBanner}>
                <PageWrapper>
                    <div className={classes.searchBox}>
                        <form className={classes.searchBoxForm} onSubmit={this.submitHandler} autoComplete="off">
                            <div className={classes.inputBox}>
                                <div className={classes.input}>
                                    <label>내 재능</label>
                                    <div>
                                        <input
                                            value={this.state.myTalent}
                                            name="myTalent"
                                            onChange={e => this.onChangeHandler(e)}
                                            placeholder="교환할 당신의 재능을 입력하세요."
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={classes.betweenInput}>
                                    <label>&nbsp;</label>
                                    <div className={classes.switchBtn} onClick={this.switchTalent}>
                                        <button type="button">〈 〉</button>
                                    </div>
                                </div>
                                <div className={classes.input}>
                                    <label>교환 재능</label>
                                    <div>
                                        <input
                                            value={this.state.yourTalent}
                                            name="yourTalent"
                                            onChange={e => this.onChangeHandler(e)}
                                            placeholder="교환 받기 원하는 재능을 입력하세요."
                                        />
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
    }
};

export default withRouter(SearchBanner);