import { CHANGE_PRIMARY_COLOR } from '../actions/theme';

const initialState = {
    primarColor: '#4f6d7a',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRIMARY_COLOR:
            return {
                ...state,
                primarColor: action.color,
            };
        default:
            return state;
    }
};