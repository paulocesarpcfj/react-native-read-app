import { FETCH } from '../actions/chapters';

const INITIAL_STATE = {
    isLoading: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH: {
            const { response } = action.payload;

            return { ...state, ...response, ...action.payload, isLoading: false };
        }
        default:
            return state;
    }
};
