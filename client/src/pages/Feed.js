import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIE_FEED } from "../utils/queries";


const Feed = () => {
  const { loading, data } = useQuery(QUERY_MOVIE_FEED);
  const users = data?.users || [];
  // console.log(users[0].savedMovies[0].title)
 
  return (
    <>
      <h1>Recent Activity:</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <h4>{user.username} recently saved:</h4>
            <p>{user.savedMovies.length} Movies added to collection</p>
            <p>{user.savedMovies[0].title} Saved Movies</p>
            <p>{user.savedMovies[0].description} Saved Movies</p>
            <img src={`https://image.tmdb.org/t/p/w300/${user.savedMovies[0].image}`} alt={user.savedMovies[0].title}  /> 
            <p><a href={`https://image.tmdb.org/t/p/original${user.savedMovies[0].backdrop}`} > Backdrop </a> </p>
            <p>{user.savedMovies[0].trailer} </p>
            <p>{user.savedMovies[0].createdAt} </p> 
             
            


          
            
          </div>
          
        ))
      )}
    </>
  );
};

export default Feed;
