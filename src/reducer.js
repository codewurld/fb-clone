
export const initialState = {
    // no initial user logged in
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER"
};

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            // if user logged in
            // return current state with current user
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
}