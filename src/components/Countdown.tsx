import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class Countdown extends Component {
    state = {
        daysLeft: ''
    }

    componentDidMount() {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        const a = new Date();
        const b = new Date('12/19/2019');

        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        this.setState({ daysLeft: Math.floor((utc2 - utc1) / _MS_PER_DAY) });
    };


    render() {
        return (
            <div style={{ marginTop: '80px' }}>
                <Box>
                    <h2>{this.state.daysLeft} Days Left!</h2>
                    <div style={{ marginTop: "40px" }}>
                        <Button style={{ marginLeft: '10px' }} variant="contained">Food to Make</Button>
                        <Button style={{ marginLeft: '10px' }} variant="contained">Places to Eat</Button>
                        <Button style={{ marginLeft: '10px' }} variant="contained">People to See</Button>
                        <Button style={{ marginLeft: '10px' }} variant="contained">Things to Do</Button>
                    </div>
                </Box>
            </div>
        );
    };
};

export default Countdown;