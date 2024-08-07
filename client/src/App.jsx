import './App.css';
import {BrowserRouter, Outlet} from 'react-router-dom';

import Navbar from './components/Navbar';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    url: '/graphql',
    cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
