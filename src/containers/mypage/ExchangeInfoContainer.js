import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExchangeInfo from '../../components/mypage/ExchangeInfo/ExchangeInfo';
import { updateObject } from '../../shared/utility';
import * as actions from '../../store/actions/index';

class ExchangeInfoContainer extends Component {
    componentDidMount() {
        const { onFetchExchange, userId } = this.props;
        onFetchExchange(userId);
    }

    acceptHandler = (bookingId, booking) => {
        console.log(booking);
        const updatedBooking = updateObject(booking, {
            status: "Accepted!"
        });
        this.props.onAcceptBooking(bookingId, updatedBooking)
    }

    render() {
        const { applied, received, loading } = this.props;
        return (
            <ExchangeInfo
                applied={applied}
                received={received}
                loading={loading}
                acceptHandler={this.acceptHandler}
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
        onFetchExchange: (userId) => dispatch(actions.fetchExchange(userId)),
        onAcceptBooking: (bookingId, updatedBooking) => dispatch(actions.acceptBooking(bookingId, updatedBooking))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeInfoContainer);