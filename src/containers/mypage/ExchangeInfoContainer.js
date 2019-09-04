import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExchangeInfo from '../../components/mypage/ExchangeInfo/ExchangeInfo';
import * as actions from '../../store/actions/index';

class ExchangeInfoContainer extends Component {
    componentDidMount() {
        const { onFetchExchange, userId } = this.props;
        onFetchExchange(userId);
    }

    render() {
        const { applied, received, loading } = this.props;
        return (
            <ExchangeInfo
                applied={applied}
                received={received}
                loading={loading}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId,
        applied: state.mypage.applied,
        received: state.mypage.received,
        loading: state.mypage.loading,
        error: state.mypage.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchExchange: (userId) => dispatch(actions.fetchExchange(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeInfoContainer);