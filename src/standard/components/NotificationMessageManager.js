import React, { Component } from 'react'
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { clearMessages } from 'standard/reducer/StandardMethods';

class NotificationMessageManager extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       messageNum: 0,
       open: true
    }
  }

  onOpen = () => {
    this.setState({
      open: true,
      messageNum: this.state.messageNum + 1
    });
  }

  onClose = (event,reason) => {
    if(reason === "clickaway")
      return;
    if(this.state.messageNum + 1 === this.props.standard.messages.length){
      clearMessages();
      this.setState({
        open: true,
        messageNum: 0
      });
    }
    else{
      setTimeout(this.onOpen, 500);
      this.setState({
        open: false,
      });
    }
  }

  render() {
    let message = this.props.standard.messages[this.state.messageNum];
    return (
      <>
        {this.props.standard.displayMessage ? 
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={this.state.open && this.props.standard.displayMessage}
          autoHideDuration={5000}
          onClose={this.onClose}>
              <MuiAlert elevation={6}
                        variant="filled"
                        severity={typeof message !== 'undefined' ? message.getType(): ""}
                        className="standard-snackBarSize">
                  <span>{typeof message !== 'undefined' ? message.getMessage(): ""}</span>
              </MuiAlert>
          </Snackbar>
        : <></>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    standard: state.standard
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(NotificationMessageManager);