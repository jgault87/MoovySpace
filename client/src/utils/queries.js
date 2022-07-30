import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedMovies {
        movieId
        title
        description
        image
        backdrop
        trailer
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedMovies {
        movieId
        title
        description
        image
        backdrop
        trailer
      }
    }
  }
<<<<<<< HEAD
=======

>>>>>>> 178111fa82fb1751f118fbeb262e45e67becc9ca
`;

export const QUERY_MOVIE_FEED = gql`
  query users {
    users {
      _id
      username
      savedMovies {
        movieId
        title
        description
        image
        backdrop
        trailer
      }
    }
  }
`;
