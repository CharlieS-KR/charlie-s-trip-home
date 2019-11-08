import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Main from './components/Main';

import Container from '@material-ui/core/Container';

const App: React.FC = () => {
  return (
    <div className="App">
      <MainHeader />
      <section id='main' className='main-section'>
        <Container style={{ height: '100%' }} className='main-container'>
          <Route path='/' exact component={Main} />
        </Container>
      </section>
    </div>
  );
}

export default App;
