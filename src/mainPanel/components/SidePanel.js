import { Drawer } from '@material-ui/core'
import React, { Component } from 'react'

export default class SidePanel extends Component {
  render() {
    return (
      <Drawer anchor={"left"} {...this.props}>
        <h1>Cenoura is watching you (O_o)</h1>
      </Drawer>
    )
  }
}
