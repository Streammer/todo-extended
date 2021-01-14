const handlers = {
    DEFAULT: state=>state
}

export const alertReducer = (state, action)=> {
    const handle = handlers[action.type]
    return handle(state, action)
}