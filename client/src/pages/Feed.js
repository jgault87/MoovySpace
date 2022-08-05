import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIE_FEED } from "../utils/queries";
import { Link } from "react-router-dom";
import './feed.scss'


const feedStyles = {
  gridContainer: {
    justifyItems: 'center',
    display: 'grid',
    gridGap: '3rem',
    padding: '3rem',
    gridTemplateColumns: '1fr',
  },
  gridItem: {
    display: 'grid',
    position: 'relative',
    backgroundColor: 'var(--color-bg-variant)',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '1rem',
  },
  gridImage: {
    borderRadius: '.5rem',
    border: '1px solid #ddd',
    padding: '5px',
    maxWidth: '50%',
    height: 'auto',
  },
};

const Feed = () => {
  const { loading, data } = useQuery(QUERY_MOVIE_FEED);
  const users = data?.users || [];

  return (
    <>
      <h2>Recent Activity:</h2>
      <div className='feedGridContainer' style={feedStyles.gridContainer}>
        {loading ? (

          <div class="loader">
            <div class="loader__filmstrip">
            </div>
            <p class="loader__text">
              loading
            </p>
          </div>
        ) : (
          users.map((user) => {
            if (user.savedMovies.length) {
              return (
                <div>
                  <div className="movie_card" id="bright">
                    <div className="info_section">
                      <div className="movie_header">
                        <img className="locandina" src={`https://image.tmdb.org/t/p/w300${user.savedMovies.at(-1).image}`} />
                        <h1 id='movieTitle'>{user.savedMovies.at(-1).title}</h1>
                        <div className='movieUser'>
                          <Link to={`/profiles/${user.username}`}> {user.username}  </Link> <p>  recently saved{' '} <strong>{user.savedMovies.at(-1).title}</strong> and{' '} {user.savedMovies.length - 1} other movies to their collection </p>
                        </div>
                      </div>
                      <div className="movie_desc">
                        <p className="text">
                          {user.savedMovies.at(-1).description}
                        </p>
                      </div>
                      <div className="movie_social">
                        <ul>
                          <li id="createdAt">{user.savedMovies.at(-1).createdAt} </li>
                        </ul>
                      </div>
                    </div>
                    <img className="blur_back " src={`https://image.tmdb.org/t/p/original${user.savedMovies.at(-1).backdrop}`}></img>
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    </>
  );
};

export default Feed;



// return (
//   <div style={feedStyles.gridItem} key={user._id}>
//     <h4>
//       <Link
//         className='btn btn-primary'
//         to={`/profiles/${user.username}`}
//       >
//         {user.username}
//       </Link>
//     </h4>
//     <p>
//       recently saved{' '}
//       <strong>{user.savedMovies.at(-1).title}</strong> and{' '}
//       {user.savedMovies.length - 1} other movies to their
//       collection
//     </p>

//     <img
//       style={feedStyles.gridImage}
//       src={`https://image.tmdb.org/t/p/w300${
//         user.savedMovies.at(-1).image
//       }`}
//       alt={user.savedMovies.at(-1).title}
//     />

//     <h4>{user.savedMovies.at(-1).title}</h4>

//     <a
//       href={`https://www.youtube.com/watch?v=${
//         user.savedMovies.at(-1).trailer
//       }`}
//       target='_blank'
//       rel='noreferrer'
//       className='btn btn-primary'
//     >
//       {' '}
//       Watch the trailer on Youtube!{' '}
//     </a>
//     <p>{user.savedMovies.at(-1).createdAt} </p>
//   </div>
// );