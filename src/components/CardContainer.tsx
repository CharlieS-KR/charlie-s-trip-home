import React, { Component } from 'react';
import {
    Grid,
    Paper,
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@material-ui/core';

interface CardContainerProps {
    currentOption: string;
};

class CardContainer extends Component<CardContainerProps> {
    constructor(props: CardContainerProps) {
        super(props);

        this.state = {

        }
    }
    render() {
        console.log("currentOption", this.props.currentOption);
        return (
            <Grid container>
                <Grid item xs={12} sm>
                    <Paper>
                        <Card>
                            <CardHeader
                                title='item title'
                                subheader='created by on date'
                                style={{ borderBottom: '1px solid lightgrey ' }}
                            />
                            <CardContent>
                                <Typography variant="h6">
                                    Description:
                                </Typography>
                                <Typography>
                                    This is our card content
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
};

export default CardContainer;