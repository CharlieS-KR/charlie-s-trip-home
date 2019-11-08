import React, { Component } from 'react';
import Countdown from './Countdown';
import '../styles/Main.css';
import { Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

class Main extends Component {
    render() {
        return (
            <section id='main' className='main-section'>
                <Container style={{ height: '100%' }} className='main-container'>
                    <Route path='/' exact component={Countdown} />
                </Container>
            </section>
        );
    }
};

export default Main;