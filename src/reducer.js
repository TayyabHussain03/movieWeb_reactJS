const reducer = (state, action) => {
    switch (action.type) {
        case "SHOW_LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_DATA":
            return {
                ...state,
                loading: false,
                Search: action.payload.Search,
                errorShow:action.payload.errorShow

            }
        case "MOVIE_SEARCH":
            return {
                ...state,
                query: action.query
            }
        case "GET_ERROR":
            return {
                errorShow: action.payload.errorShow,
                errorMsg: action.payload.errorMsg
            }

        default:
            return state
    }
}

export default reducer