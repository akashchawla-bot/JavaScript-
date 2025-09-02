import React, { Component } from 'react';
import NewItem from './NewItem';
import Spinner from './spinner';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],           // Stores fetched news articles
      loading: true,          // Controls spinner visibility
      nextPage: null,         // Token for the next page (from API)
      currentPageToken: null, // Token for the current page
      pageHistory: [],        // Stack of previous page tokens for back navigation
    };
  }

  // ✅ Modified to support cursor-based pagination using page tokens
  async fetchNews(pageToken = null, isNext = true) {
    this.setState({ loading: true });

    let url = `https://newsdata.io/api/1/news?apikey=pub_6c50e154e9a241de9bfbd20e7a80d525&country=us`;
    if (pageToken) {
      url += `&page=${pageToken}`; // Append token if available
    }

    try {
      const res = await fetch(url);
      const data = await res.json();

      const articlesArray = Array.isArray(data.results) ? data.results : [];

      this.setState((prevState) => ({
        articles: articlesArray,
        loading: false,
        nextPage: data.nextPage || null,
        currentPageToken: pageToken,
        // ✅ Push current token to history if going forward, pop if going back
        pageHistory: isNext
          ? [...prevState.pageHistory, pageToken]
          : prevState.pageHistory.slice(0, -1),
      }));
    } catch (error) {
      console.error("API fetch error:", error);
      this.setState({ articles: [], loading: false });
    }
  }

  // ✅ Initial fetch on mount
  componentDidMount() {
    this.fetchNews(); // No token for first page
  }

  // ✅ Handles forward navigation using nextPage token
  handleNextClick = () => {
    if (this.state.nextPage) {
      this.fetchNews(this.state.nextPage, true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // ✅ Handles backward navigation using stored history
  handlePrevClick = () => {
    const history = this.state.pageHistory;
    if (history.length >= 2) {
      const previousToken = history[history.length - 2];
      this.fetchNews(previousToken, false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  render() {
    const { articles, loading, nextPage, pageHistory } = this.state;

    return (
      <div className='container my-3'>
        <h2 className='text-center'>NewsHatch - Top Headlines</h2>

        {/* ✅ Show spinner while loading */}
        {loading && <Spinner />}

        <div className='row'>
          {/* ✅ Render articles only if valid and non-empty */}
          {!loading && Array.isArray(articles) && articles.length > 0 ? (
            articles.map((element) => (
              <div className='col-md-4' key={element.link}>
                <NewItem
                  title={element.title ? element.title.slice(0, 45) : "No Title Available"}
                  description={element.description ? element.description.slice(0, 88) : "No description available"}
                  imgURL={element.image_url || "https://cdn.mos.cms.futurecdn.net/YMK58FXgvqcYXpiT6jCW39.jpg"}
                  NewsUrl={element.link}
                />
              </div>
            ))
          ) : (
            <div className="text-center my-5">
              <h5>No news articles found. Try refreshing or check your API key.</h5>
            </div>
          )}
        </div>

        {/* ✅ Pagination buttons with proper enable/disable logic */}
        <div className='container d-flex justify-content-between'>
          <button
            disabled={pageHistory.length < 2}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={!nextPage}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;