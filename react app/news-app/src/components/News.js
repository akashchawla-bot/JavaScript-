import React, { Component } from 'react';
import NewItem from './NewItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], // Set initial articles to an empty array
      loading: true, // Set initial loading to true
      page: 1, // Set initial page to 1
      totalResults: 0, // Set initial totalResults to 0
    };
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b796f5b8bccd4e868cfd3f080e040c24";
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({ 
      articles: parsData.articles,
      loading: false,
      totalResults: parsData.totalResults,
     }); // Set loading to false after fetch
  }

  handleNextClick = async () => {
    console.log("next");

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b796f5b8bccd4e868cfd3f080e040c24&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsData.articles,
      totalResults: parsData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b796f5b8bccd4e868cfd3f080e040c24&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsData.articles,
    });
  }


  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsHatch - Top Headlines</h2>
        
        {/* Display a loading message while fetching data */}
        {this.state.loading && <p className='text-center'>Loading...</p>}

        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewItem
                  title={element.title ? element.title.slice(0, 45) : "No Title Available for this article. Click Read More to find out."}
                  description={element.description ? element.description.slice(0, 88) : "No description available for this article. Click Read More to find out."}
                  imgURL={element.urlToImage? element.urlToImage : "https://cdn.mos.cms.futurecdn.net/YMK58FXgvqcYXpiT6jCW39.jpg"}
                  NewsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page >= Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;