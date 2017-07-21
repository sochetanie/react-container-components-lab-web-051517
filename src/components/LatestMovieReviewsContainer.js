import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'b26cbc1f3d13401caf3e5910e8a05a8a';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            reviews: []
        }
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
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
            )
    }

}