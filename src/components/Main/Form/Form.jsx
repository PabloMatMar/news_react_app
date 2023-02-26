import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Form extends Component {



  constructor(props) {
    super(props)


    this.state = {
      newIntroducedByForm: {},
      cycleLifeCompleted: false

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const abstract = e.target.newText.value;
    const image = e.target.image.value;
    const urlNew = e.target.urlNew.value;

    const newIntroducedByForm = {
      title: title,
      abstract: abstract,
      multimedia: ["", "", image],
      url: urlNew
    }
    e.target.title.value = ''
    e.target.newText.value = ''
    e.target.image.value = ''
    e.target.urlNew.value = ''
    
    this.props.catchData(newIntroducedByForm)
    this.setState({cycleLifeCompleted: true})
  }


  render() {
    return this.state.cycleLifeCompleted ? <Navigate to='/list' /> : <section>

      <form onSubmit={this.handleSubmit}>

        <label htmlFor="title">title:</label><br />
        <input type="text" name="title" placeholder="Title" /><br />

        <p><label htmlFor="newText">Enter your new:</label></p>
        <textarea name="newText"  rows="4" cols="50" placeholder="your new" ></textarea><br />

        <label htmlFor="image">URL image:</label><br />
        <input type="url" name="image" placeholder="url imagen" /><br />

        <label htmlFor="urlNew">URL new </label><br />
        <input type="url" name="urlNew" placeholder="url new" /><br />
        <button type="submit">Send</button>
      </form>


    </section>

  }
}

export default Form;
