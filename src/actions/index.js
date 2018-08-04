import axios from 'axios';
import constants from '../constants/';

export default {
    createListItem: () => {
        return dispatch => {
            axios.get(constants.API_URL)
                .then(function (response) {
                    dispatch({
                        type: constants.FETCH_STASHPOINTS_REQUEST,
                        payload: response,
                    });
                });
        };
    },
    filterManchester: () => {
        return dispatch => {
            axios.get(constants.API_URL + constants.FILTER_MANCHESTER)
                .then(function (response) {
                    dispatch({
                        type: constants.FETCH_STASHPOINTS_FILTERED_REQUEST,
                        payload: response,
                    });
                });
        };
    },
    sortCapacity: () => {
        return dispatch => {
            axios.get(constants.API_URL + constants.SORT_CAPACITY)
                .then(function (response) {
                    dispatch({
                        type: constants.FETCH_STASHPOINTS_SORTED_REQUEST,
                        payload: response,
                    });
                });
        };
    },
    setLoading: () => {
        return dispatch => {
            dispatch({
                type: constants.SET_LOADING_REQUEST,
                payload: true,
            });
        };
    }
};

