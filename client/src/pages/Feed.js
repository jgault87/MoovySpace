import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_MOVIE_FEED } from '../utils/queries';

const Feed = () => {

    const { loading, data } = useQuery(QUERY_MOVIE_FEED);
    const users = data?.users || [];

  return (
    <>
    <h1>Recent Activity:</h1>
    {loading ? (
            <div>Loading...</div>
          ) : (
           
            users.map((user) => 
            
            <div key={user._id}>
            <h4>{user.username} recently saved:</h4>
            <p>{user.savedMovies.length} Saved Movies</p>
            <p>{user.savedMovies[0].title}</p>
            <p>{user.savedMovies[0].description}</p>
            </div>
            )
          )}

    </>
  )
}

export default Feed