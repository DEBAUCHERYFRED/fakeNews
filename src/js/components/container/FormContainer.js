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
  renderCard (){
    console.log(this.props.newsData.newsReducer, "function call")
    this.props.newsData.newsReducer[0].map((value,key) => {
      return (
        <div className="row">
         <div className="col s12 m7">
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
    console.log(this.props.newsData.newsReducer[0], "props")
    if(this.props.newsData.newsReducer[0] !== "undefined" || this.props.newsData.length > 0 ){
      console.log("call")
      return (
        <div>{this.renderCard()}</div>
      )
    } else {
      return <div></div>;
    }
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
