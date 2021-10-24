export const formData = (state) => ({
    type: 'formData',
    payload: state
})

export const newState = (id) => ({
    type: 'DELETE_DATA',
    payload: id
})