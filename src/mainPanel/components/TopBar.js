import React, { Component } from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

export default class TopBar extends Component {
  render() {
    return (
      <>
        <AppBar position="fixed">
          <Toolbar>
            <Box display='flex' justifyContent="space-between" alignItems="center" flexDirection="row" flexGrow={1}>
              <Box display='flex' flexDirection='row' justifyContent="space-around" alignItems="center" >
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.props.onClick}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  Cuckoo COVID
                </Typography>
              </Box>
              <Button size='large' color="inherit">SCAN</Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar /> 
      </>
    )
  }
}
