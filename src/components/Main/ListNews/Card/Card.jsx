import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: this.props.data

    }
  }
  render() {
    return <div>
      {this.props.data.abstract ?
        <>
          <h4>Title: <br />
            {this.props.data.title}</h4>
          <p>New: {this.props.data.abstract}</p>
          <img src={this.props.data.multimedia[2].url} alt="" />
          <p><a href={this.props.data.url} target="_blank" rel="noreferrer">More informacion in the NTY</a></p>

          <button onClick={this.props.remove}>Delete</button>
        </> :
        <></>
      }
    </div>

  }

}
export default Card;
