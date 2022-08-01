import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIE_FEED } from '../utils/queries';

const feedStyles = {
  gridContainer: {
    display: 'grid',
    gridGap: '3rem',
    padding: '3rem',
    gridTemplateColumns: '1fr 1fr'
  },
  gridItem: {
    position: 'relative',
    backgroundColor: 'var(--color-primary-variant)',
    justifyContent: 'center',
    padding: '1rem',
    borderRadius: '1rem',
  },
  gridImage: {
    borderRadius: '.5rem',
    border: '1px solid #ddd',
    padding: '5px',
    maxWidth: '50%',
    height: 'auto',
    
  }
};

const Feed = () => {
  const { loading, data } = useQuery(QUERY_MOVIE_FEED);
  const users = data?.users || [];
  // console.log(users[0].savedMovies[0].title)

  return (
    <>
      <h2>Recent Activity:</h2>
      <div style={feedStyles.gridContainer}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          users.map((user) => (
            <div style={feedStyles.gridItem} key={user._id}>
              <h4>
                {user.username} recently saved <strong>{user.savedMovies[0].title}</strong> and {user.savedMovies.length} other movies
                to their collection
              </h4>
              <img
                style={feedStyles.gridImage}
                src={`https://image.tmdb.org/t/p/w300${user.savedMovies[0].image}`}
                alt={user.savedMovies[0].title}
              />

              <h4>{user.savedMovies[0].title}</h4>
              
              {/* <p>{user.savedMovies[0].description} </p> */}

              <p>
                <a
                  href={`https://image.tmdb.org/t/p/original${user.savedMovies[0].backdrop}`}
                >
                  {' '}
                  Backdrop{' '}
                </a>{' '}
              </p>
              <p>{user.savedMovies[0].trailer} </p>
              <p>{user.savedMovies[0].createdAt} </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Feed;
