import React, { Component } from 'react';

import classes from './Loading.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

class Loading extends Component {
    render() {
        return (
            <div className={cx('Loading', this.props.extraClass)}>
                <div className={cx('loadingBar')}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Loading;