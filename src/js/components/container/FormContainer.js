import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getData from "./api"
import Input from "../presentational/Input";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGetNews = this.handleGetNews.bind(this);
  }
  componentDidMount(){
    console.log(this.props, "props")
  }
  handleChange(event) {
    console.log(event);
  }
  handleGetNews(){
    this.props.getData()
  }
  render() {
    console.log(this.props, "props")
    const { title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="title"
          label="search for news"
          type="text"
          id="title"
          value={title}
          handleChange={this.handleChange}
        />
        <button type="button" onClick={this.handleGetNews}>click</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getData: bindActionCreators(getData, dispatch)
    }
};
function mapStateToProps(state) {
  return { newsData: state }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormContainer);
