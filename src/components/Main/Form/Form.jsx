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
    const date = e.target.date.value;

    const newIntroducedByForm = {
      title: title,
      abstract: abstract,
      multimedia: ["", "", image],
      url: urlNew,
      published_date: date
    }
    e.target.title.value = ''
    e.target.newText.value = ''
    e.target.image.value = ''
    e.target.urlNew.value = ''
    
    this.props.catchData(newIntroducedByForm)
    this.setState({cycleLifeCompleted: true})
  }


  render() {
    return this.state.cycleLifeCompleted ? <Navigate to='/list' /> : <article>

      <form onSubmit={this.handleSubmit}>

        <label htmlFor="title">title:</label>
        <input type="text" name="title" placeholder="Title" />

        <p><label htmlFor="newText">Enter your new:</label></p>
        <textarea name="newText"  rows="4" cols="50" placeholder="your new" minLength="25" maxLength="400"></textarea>

        <label htmlFor="image">URL image:</label>
        <input type="url" name="image" placeholder="url imagen" />

        <label htmlFor="urlNew">URL new:</label>
        <input type="url" name="urlNew" placeholder="url new" />

        <label htmlFor="date">Date of the new:</label>
        <input type="date" name="date" placeholder="date of the New" />
        <button type="submit">Send</button>
      </form>


    </article>

  }
}

export default Form;
