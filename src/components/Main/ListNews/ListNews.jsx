import React, { Component } from 'react';
import Card from './Card';
import Categorys from './categorys.json';
import { v4 as uuidv4 } from 'uuid';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      category: "",
      options: Categorys

    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if(this.state.category !== ""){
      const resp = await fetch(`https://api.nytimes.com/svc/topstories/v2/${this.state.category}.json?api-key=${process.env.REACT_APP_API_KEY}`);
      const data = await resp.json();
      const newsApi = data.results.slice(0, 5)
      const newIntroducedByForm = this.props.newIntroducedByForm
      if (this.state.category !== prevState.category) {
        this.setState({
          news: [...newsApi, newIntroducedByForm]
        })
      }

    }

  }

  deleteNew = (i) => {
    const remainingNews = this.state.news.filter((event, j) => i !== j);
    this.setState({ news: remainingNews })
  }

  printCards = () => {
    return <section> {this.state.news.map((news, i) => <Card data={news} remove={() => this.deleteNew(i)} key={uuidv4()} />)}</section>
  }

  printOptions = () => {
    const options = this.state.options.map((category) => <option value={category} key={uuidv4()}>{category}</option>)
    return options
  }



  handleChange = (event) => {
    const category = event.target.value
    this.setState({ category: category })
  }

  render() {
    return (
      <section>
        <article>
          <form >
            <label htmlFor="category">Choose a category:</label>
            <select value={this.state.category} onChange={this.handleChange}>
              {this.printOptions()}
            </select>
          </form>
        </article>
        <article>
          <h3>News</h3>
          {this.printCards()}
        </article>
      </section>
    )
  }
}

export default ListNews;
