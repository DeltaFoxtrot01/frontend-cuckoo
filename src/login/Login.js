import { Button, createMuiTheme, Paper, TextField, ThemeProvider } from '@material-ui/core'
import React, { Component } from 'react'
import logo from "images/cuckoo.jpg"
import "login/css/borders.css";
import "login/css/colors.css";
import "login/css/efects.css";
import "login/css/fonts.css";
import "login/css/position.css";
import "login/css/size.css";
import { LoginService } from 'tools/remoteServices/LoginService';
import { User } from 'tools/models/User';
import { withRouter } from 'react-router';

class Login extends Component {

  constructor(props) {
    super(props)
  
    this.username = "";
    this.password = "";

    this.state = {
      disabled: false,
      invalidCrendetials: false
    };
  }
  

  onChangeUsername = (event) => {
    this.username = event.target.value;
    if(this.state.invalidCrendetials)
      this.setState({
        invalidCrendetials: false
      });
  }

  onChangePassword = (event) => {
    this.password = event.target.value;
    if(this.state.invalidCrendetials)
      this.setState({
        invalidCrendetials: false
      });
  }

  onKeyUp = (event) => {
    if(event.keyCode === 13)
      this.onClick();
  }

  onClick = () => {
    if(this.username === "" || this.password === ""){
      this.setState({
        invalidCrendetials: true
      });
    }
    else{
      LoginService.doLogin(new User({"email": this.username, 
                                     "password": this.password}))
      .then((response) => {
        this.props.history.push("/panel");
      })
      .catch((err) => {
        if(err.response.status === 403){
          this.setState({invalidCrendetials: true});
        }
      });
    }
  }


  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#1C439A"
        }
      }
    });

    return (
      <div className="login-center 
                      login-fullScreen 
                      login-fullWidth
                      login-greyBackground">
        <Paper elevation={3}
               className="login-columnSize
                          login-fullPageHeight">

          <div className="login-fullPageHeight
                          login-blueBackground
                          login-fullWidth
                          login-center">
            <Paper className="login-topPaperPosition 
                              login-absolutePosition
                              login-insidePadding
                              login-center" elevation={3}>
              <h1>Welcome to Cuckoo COVID</h1>
              <img src={logo} alt="logo" className="login-imageSize"/>
              <TextField label="Username" onKeyUp={this.onKeyUp} onChange={this.onChangeUsername}/>
              <TextField label="Password" onKeyUp={this.onKeyUp} type="password" onChange={this.onChangePassword}/>
              {this.state.invalidCrendetials ? 
              <div className="login-invalidCrentialsSize 
              login-red 
              login-centerVertical">*Invalid Credentials</div>
              : 
              <div className="login-invalidCrentialsSize"/>
              }
              <ThemeProvider theme={theme}>
                <Button disabled={this.state.disabled} 
                        onClick={this.onClick.bind(this)}
                        color="primary" variant="contained">
                  Login
                </Button>
              </ThemeProvider>
            </Paper>
          </div>
        </Paper>
      </div>
    )
  }
}

export default withRouter(Login);