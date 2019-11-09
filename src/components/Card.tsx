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
        <Grid style={{ marginBottom: 10 }} item xs={12} sm={12} md={6} lg>
            <Paper>
                <Card style={{ minHeight: 300 }}>
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