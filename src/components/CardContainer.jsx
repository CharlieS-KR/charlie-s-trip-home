import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

import {
    Grid
} from '@material-ui/core';


class CardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    };

    handleRenderCards = () => {
        return this.props.items.map((item, index) => <Card key={index} itemData={item}></Card>)
    }

    render() {
        return (
            <Grid container>
                {this.props.items ? this.handleRenderCards() : ''}
            </Grid>
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        items: state[ownProps.currentOption]
    };
};

export default connect(mapStateToProps)(CardContainer);