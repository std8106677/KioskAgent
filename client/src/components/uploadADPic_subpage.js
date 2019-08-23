import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { setPage } from "../actions";
import { } from "react-bootstrap";
import { } from 'reactstrap';
import { } from "../utils/api";
import { Locales } from "../lang/language";
const axios = require("axios");
class UploadADPicPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password_old: "",
      password_new: "",
      password_new2: "",
      file: null
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage',this.state.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post("/api/upload",formData,config)
    .then((response) => {
      alert("The file is successfully uploaded");
    }).catch((error) => {
    });
  }

  onChange = (e) => {
      this.setState({file:e.target.files[0]});
  }

  render() {
    return (
      <div>
        <div style={{margin: 10}}>{"店看看ViuKiosk上傳廣告圖片"}</div>
        <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" name="myImage" onChange= {this.onChange} />
            <button type="submit">Upload</button>
        </form>
        <table align="center" cellPadding="8" border="1" width="80%">
          <thead>
            <tr>
              <td><span>{"position"}</span></td>
              <td><span>{"name"}</span></td>
              <td><span>{"media"}</span></td>
              <td><span>{"upload"}</span></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>{"全屏廣告位"}</span></td>
              <td><span>{"珍奶促銷"}</span></td>
              <td><span>{""}</span></td>
              <td><span>{"/xxx/xxx/xxx/xxx.jpg"}</span></td>
            </tr>
            <tr>
              <td><span>{"橫幅廣告位"}</span></td>
              <td><span>{"夏日廣告"}</span></td>
              <td><span>{""}</span></td>
              <td><span>{"/xxx/xxx/xxx/xxx.jpg"}</span></td>
            </tr>
            <tr>
              <td><span>{"結賬廣告位"}</span></td>
              <td><span>{""}</span></td>
              <td><span>{""}</span></td>
              <td><span>{"/xxx/xxx/xxx/xxx.jpg"}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ page }, ownProps) {
  return { page };
}


//this.props.fetchPost
//this.props.deletePost
export default connect(mapStateToProps, { setPage })(withCookies(UploadADPicPage));
