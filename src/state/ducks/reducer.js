const initialState = {
    data: []
}

export const formData = (state = initialState, action) => {
    switch (action.type) {
        case 'formData':
            return {
                ...initialState,
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
}