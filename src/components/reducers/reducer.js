
const INCREASE = "COUNTER/INCREASE";
const DECREASE = "COUNTER/DECREASE";

export const increaseNum = () => {
    return { type: INCREASE };
};

export const decreaseNum = () => {
    return { type: DECREASE };
}

const initialState = {
    num : 1,
}

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                num: state.num + 1,
                price: state.price ++
            };
        case DECREASE:
            return {
                ...state,
                num: state.num - 1,
            };
        default:
            return {
                ...state,
            }
    }
}