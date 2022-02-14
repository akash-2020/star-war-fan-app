import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Movies from './Movies';
import { Routes ,Route } from 'react-router-dom';
import Character from './Character';
import Header from './Header';

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  //error while using this url https://graphql.org/swapi-graphql 
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  },
  credentials: "omit",
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Header />
        <div className="App">
          
        <Routes>
          <Route strict exact path="/" element={<Movies />} />
          <Route strict exact path="/:id" element={<Character />} />
        </Routes>
        </div>
      
    </ApolloProvider>
  );
}

export default App;
