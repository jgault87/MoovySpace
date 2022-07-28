import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import AuthService from './utils/auth';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/index';
import Home from './pages/Home';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Welcome from './components/HomePage/HomePage';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* Put something here if we want it on every page */}

        {/* Adding auth logic to routes as an extra layer of protection */}
        {/* Takes the user to the welcome page if they aren't signed in */}

        <Switch>

          <Route path="/">
            <Welcome />
          </Route>

          <Route path="/home">
            {AuthService.loggedIn() ?
              <>
                <Header />
                <Home /> 
                </>
                : <Welcome />}
          </Route>

          <Route path="/me">
           {AuthService.loggedIn() ? <Profile /> : <Welcome /> }
          </Route>

          <Route path="/profiles/:username">
            {AuthService.loggedIn() ? <Profile /> : <Welcome /> }
          </Route>

          <Route path="/thoughts/:thoughtId">
            {AuthService.loggedIn() ? <SingleThought /> : <Welcome /> }
          </Route>

        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
