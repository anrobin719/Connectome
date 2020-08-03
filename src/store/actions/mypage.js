import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const applyExchangeStart = () => {
  return {
    type: actionTypes.APPLY_EXCHANGE_START
  };
};

export const applyExchangeSuccess = () => {
  return {
    type: actionTypes.APPLY_EXCHANGE_SUCCESS
  };
};

export const applyExchangeFail = () => {
  return {
    type: actionTypes.APPLY_EXCHANGE_FAIL
  };
};

export const applyExchange = (postId, userId, authorId, title, userEmail) => {
  return dispatch => {
    dispatch(applyExchangeStart());

    const bookingData = {
      postId: postId,
      postTitle: title,
      accepterId: authorId,
      applicantId: userId,
      applicantEmail: userEmail,
      status: "progress.."
    };
    axios
      .post(`/booking.json`, bookingData)
      .then(res => {
        console.log(res);
        dispatch(applyExchangeSuccess());
      })
      .catch(err => {
        console.log(err);
        dispatch(applyExchangeFail());
      });
  };
};

export const fetchExchangeStart = () => {
  return {
    type: actionTypes.FETCH_EXCHANGE_START
  };
};

export const fetchReceivedDataSuccess = data => {
  return {
    type: actionTypes.FETCH_RECEIVED_DATA_SUCCESS,
    data: data
  };
};
export const fetchAppliedDataSuccess = data => {
  return {
    type: actionTypes.FETCH_APPLIED_DATA_SUCCESS,
    data: data
  };
};

export const fetchExchangeFail = () => {
  return {
    type: actionTypes.FETCH_EXCHANGE_FAIL
  };
};

export const fetchExchange = userId => {
  return dispatch => {
    dispatch(fetchExchangeStart());

    axios
      .get(`/booking.json?orderBy="accepterId"&equalTo="${userId}"`)
      .then(res => {
        console.log(res);
        const receivedData = [];
        for (let key in res.data) {
          receivedData.push({
            ...res.data[key],
            bookingId: key
          });
        }
        dispatch(fetchReceivedDataSuccess(receivedData));

        axios
          .get(`/booking.json?orderBy="applicantId"&equalTo="${userId}"`)
          .then(res => {
            console.log(res);
            const appliedData = [];
            for (let key in res.data) {
              appliedData.push({
                ...res.data[key],
                bookingId: key
              });
            }
            dispatch(fetchAppliedDataSuccess(appliedData));
          })
          .catch(err => {
            console.log("applied data fetch error");
            dispatch(fetchExchangeFail());
          });
      })
      .catch(err => {
        console.log("booking fetch error");
        dispatch(fetchExchangeFail());
      });
  };
};

export const acceptBookingStart = () => {
  return {
    type: actionTypes.ACCEPT_BOOKING_START
  };
};

export const acceptBookingSuccess = () => {
  return {
    type: actionTypes.ACCEPT_BOOKING_SUCCESS
  };
};

export const acceptBookingFail = () => {
  return {
    type: actionTypes.ACCEPT_BOOKING_FAIL
  };
};

export const acceptBooking = (bookingId, updatedBooking) => {
  return dispatch => {
    dispatch(acceptBookingStart());
    axios
      .put(`/booking/${bookingId}.json`, updatedBooking)
      .then(res => {
        console.log("ACCEPT_BOOKING_SUCCESS", res);
        dispatch(acceptBookingSuccess());
      })
      .catch(err => {
        console.log("ACCEPT_BOOKING_FAIL", err);
        dispatch(acceptBookingFail());
      });
  };
};
