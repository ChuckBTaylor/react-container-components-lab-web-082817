import React, { Component } from 'react';
import MovieReviews from './MovieReviews.js'
import 'isomorphic-fetch';

const NYT_API_KEY = 'api-key=f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
class SearchableMovieReviewsContainer extends Component{

  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = (ev) => {
    const newTerm = {searchTerm: ev.target.value}
    this.setState(newTerm)
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    fetch(`${BASE_URL}query=${this.state.searchTerm}&${NYT_API_KEY}`)
    .then(res => res.json())
    .then(json => {
      const reviews = json.results
      this.setState(reviews)
    })
  }

  render(){

    return(
      <div className='searchable-movie-reviews'>
        <form className='searchable-movie-reviews' onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.searchTerm} onChange={this.handleChange} />
          <input type='submit' value='search' />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

SearchableMovieReviewsContainer.defaultProps = {

}

SearchableMovieReviewsContainer.propTypes = {

}

export default SearchableMovieReviewsContainer;
