import React, { Component } from "react";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";
import { setPage } from "../actions";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from 'reactstrap';
import { } from "../utils/api";
import { Locales } from "../lang/language";
class MenuPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="MenuPage">
        <div style={{margin: 10}}>{"店看看ViuKiosk配置主選單"}</div>
        <Container>
          <Row>
            <Col>
                <Button onClick={() => this.props.setPage("changePassword")}>{Locales.menu.修改密碼}</Button>
            </Col>
            <Col>
                <Button onClick={() => this.props.setPage("storeConfig")}>{Locales.menu.門店配置}</Button>
            </Col>
          </Row>
          <Row>
            <Col>
                <Button onClick={() => this.props.setPage("uploadADPic")}>{Locales.menu.上傳廣告圖片}</Button>
            </Col>
            <Col>
                <Button onClick={() => this.props.setPage("uploadItemPic")}>{Locales.menu.上傳品項圖片}</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ page }, ownProps) {
  return { page };
}


//this.props.fetchPost
//this.props.deletePost
export default connect(mapStateToProps, { setPage })(withCookies(MenuPage));
