import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleMovie = () => {
    const { id } = useParams();
    let API = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}`
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data);
                setIsError({ show: "false", msg: "" });
            } else {
                setIsError({ show: "true", msg: data.Error });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        let timeOut = setTimeout(() => {
            getMovie(`${API}&i=${id}`);
        }, 1000);
        console.log("set");
        return () => {
            clearTimeout(timeOut);
            console.log("clear");
        };
    }, [id]);


    if (isLoading) {
        return (
            <>
                <div className='movie-section'>
                    <div className='loading'>Loading....</div>
                </div>
            </>
        )
    }
    if (movie) {
        return (
            <section className="movie-section">
                <div className="movie-card">
                    <figure>
                        <img src={movie.Poster} alt="" />
                    </figure>
                    <div className="card-content">
                        <p className="title">{movie.Title}</p>
                        <p className=""></p>
                        <p className="card-text">{movie.Released}</p>
                        <p className="card-text">{movie.Genre}</p>
                        <p className="card-text">{movie.imdbRating} / 10</p>
                        <p className="card-text">{movie.Country}</p>
                        <NavLink to="/" className="back-btn">
                            Go Back
                        </NavLink>
                    </div>
                </div>
            </section>
        )
    }
    return (
        <>
            <div className="movie-section">
                <h1>{isError}</h1>
            </div>
        </>
    )




}

export default SingleMovie