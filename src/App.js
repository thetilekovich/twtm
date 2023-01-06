import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css'
import { Route, Routes, useParams } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MoviePage from './components/pages/MoviePage';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { movieId } = useParams()
  const { actorId } = useParams()
  const dispatch = useDispatch()
  const { showed } = useSelector(state => state.submenu)
  const handleClick = (element) => {
    if (showed !== -1) {
      if (element.target.className !== 'menu_title') {
        dispatch({ type: 'SHOW', payload: -1 })

      }
    }
  }

  return (
    <div className="App"
      onClick={handleClick}
    >
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:movieId' element={<MoviePage />} />
        <Route path='/movie/:actorId' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
