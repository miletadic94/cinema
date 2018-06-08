const movies = (state = 1, action) => {
    switch (action.type) {
        case "NEW":
            state = state + action.payload
            break
        case "DELETE":
        state = state * action.payload
            break
        default:
            return state
    }
    return state
}

export default movies