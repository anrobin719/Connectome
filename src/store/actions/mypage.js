import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const applyExchangeStart = () => {
    return {
        type: actionTypes.APPLY_EXCHANGE_START
    }
}

export const applyExchangeSuccess = () => {
    return {
        type: actionTypes.APPLY_EXCHANGE_SUCCESS
    }
}

export const applyExchangeFail = () => {
    return {
        type: actionTypes.APPLY_EXCHANGE_FAIL
    }
}

export const applyExchange = (postId, userId, authorId, title, userEmail) => {
    return dispatch => {
        dispatch( applyExchangeStart() );
        
        const bookingData = {
            postId: postId,
            postTitle: title,
            accepterId: authorId,
            applicantId: userId,
            applicantEmail: userEmail,
            status: 'progress...'
        }
        axios.post(`/booking.json`, bookingData)
            .then(res => {
                console.log(res);
                dispatch( applyExchangeSuccess() );
            })
            .catch(err => {
                console.log(err);
                dispatch( applyExchangeFail() );
            });
    }
}



export const fetchExchangeStart = () => {
    return {
        type: actionTypes.FETCH_EXCHANGE_START
    }
}

export const fetchReceivedDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_RECEIVED_DATA_SUCCESS,
        data: data
    }
}
export const fetchAppliedDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_APPLIED_DATA_SUCCESS,
        data: data
    }
}

export const fetchExchangeFail = () => {
    return {
        type: actionTypes.FETCH_EXCHANGE_FAIL
    }
}

export const fetchExchange = (userId) => {
    return dispatch => {
        console.log(userId);
        dispatch( fetchExchangeStart() );
        // 받은 신청 확인
        axios.get(`/booking.json?orderBy="accepterId"&equalTo="${userId}"`)
            .then(res => {
                console.log(res);
                const receivedData = [];
                for ( let key in res.data ) {
                    receivedData.push({
                        ...res.data[key],
                        bookingId: key
                    });
                }
                dispatch( fetchReceivedDataSuccess(receivedData) );
                    // 내가 한 신청 확인
                    axios.get(`/booking.json?orderBy="applicantId"&equalTo="${userId}"`)
                    .then(res => {
                        console.log(res);
                        const appliedData = [];
                        for ( let key in res.data ) {
                            appliedData.push({
                                ...res.data[key],
                                bookingId: key
                            });
                        }
                        dispatch( fetchAppliedDataSuccess(appliedData) );
                    })
                    .catch(err => {
                        console.log('applied data fetch error');
                        dispatch( fetchExchangeFail() );
                    });
            })
            .catch(err => {
                console.log('booking fetch error');
                dispatch( fetchExchangeFail() );
            });
    }
}