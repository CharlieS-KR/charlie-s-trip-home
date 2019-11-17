import React, { Component } from 'react';
import Countdown from './Countdown';
import CardContainer from './CardContainer.jsx';
import AddItemForm from './AddItemForm';
import '../styles/Main.css';

import {
    Paper,
    Tabs,
    Tab
} from '@material-ui/core';

class Main extends Component {
    state = {
        currentIndex: 0,
        options: ['food', 'activities', 'people', 'places'],
        currentOption: 'food',
        addingItem: false
    }

    handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
        const { options } = this.state;
        this.setState({
            currentIndex: newIndex,
            currentOption: options[newIndex],
            addingItem: false
        });
    }

    mutateAddingItem = (event: React.ChangeEvent<{}>) => {
        this.setState({ addingItem: !this.state.addingItem });
    };

    render() {
        return (
            <section id='main' className='main-section'>
                <Paper square>
                    <Tabs
                        value={this.state.currentIndex}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleTabChange}
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Food" />
                        <Tab label="Activities" />
                        <Tab label="People" />
                        <Tab label="Places" />
                    </Tabs>
                </Paper>

                <Countdown />
                {
                    this.state.addingItem ?
                    <AddItemForm currentOption={this.state.currentOption} />
                    :
                    ''
                }
                <CardContainer currentOption={this.state.currentOption} mutateAddingItem={this.mutateAddingItem} />
            </section>
        );
    }
};

export default Main;