import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const MainHeader = () => (
    <header>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Charlie's Trip Home
                </Typography>
            </Toolbar>
        </AppBar>
    </header>
);

export default MainHeader;