import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function Header() {

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h3">Storefront</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  )
}

export default Header;