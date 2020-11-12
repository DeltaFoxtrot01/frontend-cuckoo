
import React, { Component } from 'react'
import SidePanel from 'mainPanel/components/SidePanel'
import TopBar from 'mainPanel/components/TopBar'
import { Dialog } from '@material-ui/core'
import QRScanner from './components/QRScanner'
import { LoginService } from 'tools/remoteServices/LoginService'
import { withRouter } from 'react-router'

import "mainPanel/css/borders.css";
import "mainPanel/css/colors.css";
import "mainPanel/css/efects.css";
import "mainPanel/css/fonts.css";
import "mainPanel/css/size.css";

class MainPanel extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       panelOpened: false,
       popupOpened: false,
       userInfo: null
    }
  }

  openDrawer = () => {
    this.setState({panelOpened: true});
  }
  
  closeDrawer = () => {
    this.setState({panelOpened: false});
  }

  openPopup = () => {
    this.setState({popupOpened: true});
  }

  closePopup = () => {
    this.setState({popupOpened: false});
  }

  componentDidMount(){
    LoginService.getUserInfo()
    .then(response => {
      this.setState({userInfo: response});
    })
    .catch(response => {
      this.props.history.push('/');
    })
  }

  render() {
    return (
      <>
        <TopBar    onClick={this.openDrawer.bind(this)}
                   onClickScanner={this.openPopup.bind(this)}/>
        <SidePanel onClose={this.closeDrawer.bind(this)}
                   open={this.state.panelOpened}
                   userInfo={this.state.userInfo}/>
        <Dialog open={this.state.popupOpened} onClose={this.closePopup.bind(this)}>
          <QRScanner />
        </Dialog>
      </>
    )
  }
}


export default withRouter(MainPanel);