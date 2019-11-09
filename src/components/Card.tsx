import React from 'react';

import {
    Grid,
    Paper,
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@material-ui/core';

interface CardProps {
    itemData: {
        createdBy: string;
        title: string;
        description: string;
    }
};

export default (props: CardProps) => {
    const { createdBy, title, description } = props.itemData;

    return (
        <Grid item xs={12} sm>
            <Paper>
                <Card>
                    <CardHeader
                        title={title}
                        subheader={`Created By ${createdBy}`}
                        style={{ borderBottom: '1px solid lightgrey ' }}
                    />
                    <CardContent>
                        <Typography variant="h6">
                            Description:
                        </Typography>
                        <Typography>
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Paper>
        </Grid>
    );
};