import React, { Component } from "react";

//Importing redux
import { connect } from "react-redux";

//Importing MainHero to handle it
import MainHero from "../../components/mainHero/MainHero";

class HandleHero extends Component {
  render() {
    return <MainHero logged={this.props.logged} />;
  }
}

const mapStateToProps = (state, props) => {
  return { logged: state.logged };
};

export default connect(mapStateToProps)(HandleHero);
