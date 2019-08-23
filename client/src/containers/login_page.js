import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { apiLogin } from "../utils/api";
import { Locales } from "../lang/language";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "123",
      password: "456",
      redirect: false
    };
    Locales.setLanguage("cn");
  }

  componentWillMount() {
  }

  handleSubmit = () => {
    var data = {
      account: this.state.account,
      password: this.state.password
    };
    apiLogin(data)
    .then(function (response) {
      console.log("callAPI response : " , response);
      this.setState({redirect: true});
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    }.bind(this));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/main" />;
    }
    return (
      <div style={{textAlign: "center"}}>
        <div style={{marginTop:100}}><span>{Locales.login.店看看ViuKiosk登錄}</span></div>
        <div style={{width: "360px",margin: "0 auto",padding:10}}>
          <input type="text" placeholder={Locales.login.帳號} value={this.state.account}
            onChange={e => this.setState({ account: e.target.value })} />
        </div>
        <div style={{width: "360px",margin: "0 auto",padding:10}}>
          <input type="password" autoComplete="off" placeholder={Locales.login.密碼} value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })} />
        </div>
        <div>
          <Button style={{margin: "0 auto"}} onClick={this.handleSubmit}>{Locales.login.登入}</Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({  }, ownProps) {
  return {  };
}

//this.props.fetchPost
//this.props.deletePost
export default connect(
  mapStateToProps,
  {  }
)(withCookies(LoginPage));
