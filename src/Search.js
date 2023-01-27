import React from 'react'
import { useGlobalContext } from './context';

const Search = () => {
  const { errorShow, errorMsg, movieSearch } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              onChange={(event) => {
                movieSearch(event.target.value)
              }}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{errorShow && errorMsg}</p>
        </div>
      </section>
    </>
  );
}

export default Search