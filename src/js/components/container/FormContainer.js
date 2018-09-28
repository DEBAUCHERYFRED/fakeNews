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
    this.renderCard = this.renderCard.bind(this);
  }
  componentDidMount(){
    this.props.getData()
  }
  handleChange(event) {
    console.log(event);
  }
  renderCard (cards) {
      return cards.map((value,key) => {
        return (
          <div className="row" key={key}>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-image">
                <img src={value.urlToImage}/>
                <span className="card-title">{value.title}</span>
              </div>
              <div className="card-content">
                <p>{value.content}</p>
              </div>
              <div className="card-action">
                <a href={value.url}>Go to site</a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if(this.props.newsData.newsReducer.length > 0) {
      return (
        <div>
        {this.renderCard(this.props.newsData.newsReducer[0])}
        </div>
      );
    }
    return (
      <div> Hello </div>
    );
  };
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
