import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const showModal = (modalName) => {
    return {
        type: actionTypes.SHOW_MODAL,
        modalName: modalName
    }
}

export const hideModal = ( modalName ) => {
    return {
        type: actionTypes.HIDE_MODAL,
        modalName: modalName
    }
}