import React from 'react'
import PropTypes from 'prop-types'

export const Rating = ({ rating, reviews, color }) => {
  return (
    <>
      <span
        style={{ color }}
        className={
          rating === 0.5
            ? 'fas fa-star-half-alt'
            : rating >= 1
            ? 'fas fa-star'
            : 'far fa-star'
        }
      ></span>
      <span
        style={{ color }}
        className={
          rating === 1.5
            ? 'fas fa-star-half-alt'
            : rating >= 2
            ? 'fas fa-star'
            : 'far fa-star'
        }
      ></span>
      <span
        style={{ color }}
        className={
          rating === 2.5
            ? 'fas fa-star-half-alt'
            : rating >= 3
            ? 'fas fa-star'
            : 'far fa-star'
        }
      ></span>
      <span
        style={{ color }}
        className={
          rating === 3.5
            ? 'fas fa-star-half-alt'
            : rating >= 4
            ? 'fas fa-star'
            : 'far fa-star'
        }
      ></span>
      <span
        style={{ color }}
        className={
          rating === 4.5
            ? 'fas fa-star-half-alt'
            : rating >= 5
            ? 'fas fa-star'
            : 'far fa-star'
        }
      ></span>
      <span className="ml-2">
        <strong>{reviews}</strong>
      </span>
    </>
  )
}

Rating.defaultProps = {
  color: '#ffd400',
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.string.isRequired,
  color: PropTypes.string,
}
