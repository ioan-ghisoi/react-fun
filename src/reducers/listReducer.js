import constants from '../constants';

let initialState = {
    loading: true,
    list: [
      
    ]
};

export default (state = initialState, action) => {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case constants.FETCH_STASHPOINTS_REQUEST:
            newState['list'] = action.payload.data;
            newState['loading'] = false;
            return newState;
        case constants.FETCH_STASHPOINTS_FILTERED_REQUEST:
            newState['list'] = action.payload.data;
            newState['loading'] = false;
            return newState;
        case constants.FETCH_STASHPOINTS_SORTED_REQUEST:
            newState['list'] = action.payload.data;
            newState['loading'] = false;
            return newState;
        case constants.SET_LOADING_REQUEST:
            newState['loading'] = true;
            return newState;
        default:
            return state;
    }
};