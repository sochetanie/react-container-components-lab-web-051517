// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'b26cbc1f3d13401caf3e5910e8a05a8a';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}` + `?query=`

export default class SearchableMovieReviewsContainer extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

    handleChange = (event) => {
      // debugger
      this.setState({
        searchTerm: event.target.value
      })
    }

    componentWillMount() {
        fetch(URL)
            .then(res => res.json())
            .then(reviews => {
                // debugger
                this.setState({reviews: reviews.results}) }
                )
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                  <input onChange={this.handleChange} type="text" placeholder="Search for Movie"/>
              <MovieReviews reviews={this.state.reviews}/>
            </div>
            )
    }

}