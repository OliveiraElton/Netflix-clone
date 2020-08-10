import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row title="ORIGINAL NETFLIX" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true} />
      <Row title="Populares na Netflix" fetchUrl={requests.fetchTrending} />
      <Row title="Em alta" fetchUrl={requests.fetchTopRated} />
      <Row title="Ação" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentaries} />
     
    </div>
  );
}

export default App;
