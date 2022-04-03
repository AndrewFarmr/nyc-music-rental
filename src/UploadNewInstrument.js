import React, { useState } from "react";
import './UploadNewInstrument.css';
import { addReservation } from  './data';
import { useNavigate } from "react-router-dom";

export const  withNavigation = (Component : Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
} 

class UploadNewInstrument extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      file: null,
      description: null,
      contact: null
    }
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleContactChange = this.handleContactChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleImageChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      description: this.state.description,
      contact: this.state.contact
    })
  }
  handleDescriptionChange(event) {
  	this.setState({
      file: this.state.file,
      description: event.target.value,
      contact: this.state.contact
    })
  }
  handleContactChange(event) {
  	this.setState({
      file: this.state.file,
      description: this.state.description,
      contact: event.target.value
    })
  }

  handleSubmit(event) {
  	addReservation(this.state.file, this.state.description, this.state.contact);
  	debugger;
	this.props.navigate('/search');
	debugger;
  }

  render() {
  	let preview_image;
  	if (this.state.file) {
  		preview_image = <img src={this.state.file} className="Instrument-logo"/>
  	}
  	return (
  	  <div className = 'upload-instrument'>
		  <form>
		    <label>Instrument Description</label>
		    <input type="text" id="description" name="description" onChange={this.handleDescriptionChange} placeholder="Describe your instrument.."/>

		    <label>Contact</label>
		    <input type="text" name="contact" onChange={this.handleContactChange} placeholder="Your contact email.."/>

		    <label>Instrument Image</label>
		    <input type="file" onChange={this.handleImageChange}/>
		    {preview_image}
		  
		    <button onClick={this.handleSubmit}>Submit</button>
		  </form>
	  </div>
  	);
  }
}




export default withNavigation(UploadNewInstrument);