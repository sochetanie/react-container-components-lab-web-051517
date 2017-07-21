// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
        return (
            <div className='review-list'>
                {reviews.map(x => {
                    return (
                        <div className='review'>
                            <h2>Title: {x.display_title}</h2>
                            <h4>Short Description: {x.summary_short}</h4>
                            <p>Rating: {x.mpaa_rating}</p>
                        </div>
                        )
                })}
            </div>
            )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews