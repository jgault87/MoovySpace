import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_MOVIE_FEED } from "../utils/queries";
import { Link } from "react-router-dom";

const feedStyles = {
  gridContainer: {
    justifyItems: "center",
    display: "grid",
    gridGap: "3rem",
    padding: "3rem",
    gridTemplateColumns: "1fr",
  },
  gridItem: {
    display: "grid",
    position: "relative",
    backgroundColor: "var(--color-bg-variant)",
    justifyItems: "center",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "1rem",
  },
  gridImage: {
    borderRadius: ".5rem",
    border: "1px solid #ddd",
    padding: "5px",
    maxWidth: "50%",
    height: "auto",
  },
};

const Feed = () => {
  const { loading, data } = useQuery(QUERY_MOVIE_FEED);
  const users = data?.users || [];

  return (
    <>
      <h2>Recent Activity:</h2>
      <div className="feedGridContainer" style={feedStyles.gridContainer}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          users.map((user) => {
            if (user.savedMovies.length) {
              return (
                <div style={feedStyles.gridItem} key={user._id}>
                  <h4>
                    <Link
                      className="btn btn-primary"
                      to={`/profiles/${user.username}`}
                    >
                      {user.username}
                    </Link>
                  </h4>
                  <p>
                    recently saved <strong>{user.savedMovies[0].title}</strong>{" "}
                    and {user.savedMovies.length - 1} other movies to their
                    collection
                  </p>

                  <img
                    style={feedStyles.gridImage}
                    src={`https://image.tmdb.org/t/p/w300${user.savedMovies[0].image}`}
                    alt={user.savedMovies[0].title}
                  />

                  <h4>{user.savedMovies[0].title}</h4>

                  <a
                    href={`https://www.youtube.com/watch?v=${user.savedMovies[0].trailer}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    {" "}
                    Watch the trailer on Youtube!{" "}
                  </a>
                  <p>{user.savedMovies[0].createdAt} </p>
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
