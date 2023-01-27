import React from 'react'
import { NavLink } from "react-router-dom";
import { useGlobalContext } from './context'

const Movies = () => {
  const { Search, loading } = useGlobalContext()
  const imgUrl = "https://via.placeholder.com/200/200";
  if (loading) {
    return (
      <>
        <div className='container-msg'>
          <h2>Loading....</h2>
        </div>
      </>
    )
  }
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {Search
            ? Search.map((data) => {
              const { imdbID, Title, Poster } = data;
              const movieName = Title.substring(0, 16);
              return (
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                  <div className="card">
                    <div className="card-info">
                      <h2 title={Title}>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                      <img title={Title} src={Poster === "N/A" ? imgUrl : Poster} alt={Title} />
                    </div>
                  </div>
                </NavLink>
              );
            })
            :
            ""}
        </div>
      </section>
    </>
  );
}

export default Movies
