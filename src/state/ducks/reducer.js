const initialState = {
    data: []
}

export const formData = (state = initialState, action) => {
    switch (action.type) {
        case 'formData':
            return {
                ...initialState,
                data: [...state.data, { id: state.data.length + 1, ...action.payload }]
            };
        case 'DELETE_DATA':
            const id = action.payload;
            const filterData = state.data.filter(item => item.id !== id)
            return {
                data: filterData
            }
        default:
            return state;
    }
}

export const newState = (state = initialState, action) => {
    switch (action.type) {
        case 'onDelete':
            console.log(action.payload);
            return {
                data: [...state.data.splice(0, state.data.length, ...action.payload)]
            };
        default:
            return state
    }
}