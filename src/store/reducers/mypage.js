import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    applied: [],
    received: [],
    loading: false,
    error: false
}

const applyExchangeStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}

const applyExchangeSuccess = (state, action) => {
    return updateObject(state, {
        loading: false
    })
}

const applyExchangeFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: true
    })
}

const fetchExchangeStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}

const fetchReceivedDataSuccess = (state, action) => {
    return updateObject(state, {
        received: action.data,
        loading: true
    })
}
const fetchAppliedDataSuccess = (state, action) => {
    return updateObject(state, {
        applied: action.data,
        loading: false
    })
}

const fetchExchangeFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: true
    })
}

const acceptBookingStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}
const acceptBookingSuccess = (state, action) => {
    return updateObject(state, {
        loading: false
    })
}
const acceptBookingFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: true
    })
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.APPLY_EXCHANGE_START: return applyExchangeStart(state, action);
        case actionTypes.APPLY_EXCHANGE_SUCCESS: return applyExchangeSuccess(state, action);
        case actionTypes.APPLY_EXCHANGE_FAIL: return applyExchangeFail(state, action);

        case actionTypes.FETCH_EXCHANGE_START: return fetchExchangeStart(state, action);
        case actionTypes.FETCH_RECEIVED_DATA_SUCCESS: return fetchReceivedDataSuccess(state, action);
        case actionTypes.FETCH_APPLIED_DATA_SUCCESS: return fetchAppliedDataSuccess(state, action);
        case actionTypes.FETCH_EXCHANGE_FAIL: return fetchExchangeFail(state, action);
        
        case actionTypes.ACCEPT_BOOKING_START: return acceptBookingStart(state, action);
        case actionTypes.ACCEPT_BOOKING_SUCCESS: return acceptBookingSuccess(state, action);
        case actionTypes.ACCEPT_BOOKING_FAIL: return acceptBookingFail(state, action);
        
        default: return state;
    }
}

export default reducer;