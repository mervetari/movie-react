import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import Input from '../components/Input';
import { MovieContext } from '../context/MovieContext';
import Card from '../components/Card';
import '../styles/Home.css';

const Home = () => {
  const { setSearch, movies, favoriteHandler } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='home-container'>
      <Input handleSearch={handleSearch} />
      {movies?.length > 0 ? (
        <div className='movies'>
          {movies?.map((movie) => {
            return (
              <Link
                to={'movies/tt1201607'} 
                className='text-link'
                key={movie.imdbID}
              >
                <Card
                  key={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  addFavorite={(e) => favoriteHandler(movie, e)}
                  isFavorite={movie.isFavorite}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className='search-warning'>

        </div>
      )}
    </div>
  );
};

export default Home;
