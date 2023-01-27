import React, { useContext, useEffect, useReducer } from "react"
import reducer from "./reducer"

const AppContext = React.createContext()

export let API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}`

let initialState = {
    loading: true,
    Search: [],
    query: 'avengers',
    errorMsg: '',
    errorShow: false,
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchData = async (url) => {
        dispatch({ type: "SHOW_LOADING" })
        try {
            var res = await fetch(url)
            var data = await res.json()
            if (data.Response === "True") {
                dispatch({
                    type: "GET_DATA",
                    payload: {
                        Search: data.Search,
                        errorShow: false,
                    }
                })
            }
            else {
                dispatch({
                    type: "GET_ERROR",
                    payload: {
                        errorShow: true,
                        errorMsg: data.Error,
                    }
                })
            }
        }
        catch (err) {
            console.log(err)
        }


    }

    const movieSearch = (searchText) => {
        dispatch({
            type: "MOVIE_SEARCH",
            query: searchText
        })
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            fetchData(`${API}s=${state.query}`)
        }, 850)
        return () => clearTimeout(timerOut)
    }, [state.query])

    return (
        <AppContext.Provider value={{ ...state, movieSearch }}>
            {children}
        </AppContext.Provider>
    )
}
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }