import React, { Component } from 'react';
import MovieReviews from './MovieReviews.js'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'
import 'isomorphic-fetch';

const NYT_API_KEY = 'api-key=f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(props){
    super(props)
    this.getInfo()
    this.state = {
      reviews: ['it sucks', 'was fantastic']
    }
  }

  getInfo = (term = "") => {
    fetch(`${BASE_URL}${term}${NYT_API_KEY}`)
    .then(res => res.json())
    .then(json => {
      const newReviews = {reviews: json.results}
      this.setState(newReviews)
    })
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}


export default LatestMovieReviewsContainer
