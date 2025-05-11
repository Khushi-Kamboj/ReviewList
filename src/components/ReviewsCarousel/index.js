import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  onLeftClick = () => {
    this.setState(prevState => ({
      activeIndex: prevState.activeIndex > 0 ? prevState.activeIndex - 1 : 0,
    }))
  }

  onRightClick = () => {
    const {reviewsList} = this.props
    this.setState(prevState => ({
      activeIndex:
        prevState.activeIndex < reviewsList.length - 1
          ? prevState.activeIndex + 1
          : reviewsList.length - 1,
    }))
  }
  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const review = reviewsList[activeIndex]
    return (
      <div className="card-container">
        <h1 className="heading">Reviews</h1>
        <div className="Carousel-container">
          <button
            type="button"
            className="arrow"
            data-testid="leftArrow"
            onClick={this.onLeftClick}
          >
            {' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />{' '}
          </button>

          <div className="eachItem">
            <img src={review.imgUrl} alt={review.username} />
            <p>{review.username}</p>
            <p>{review.companyName}</p>
            <p>{review.description}</p>
          </div>

          <button
            type="button"
            className="arrow"
            data-testid="rightArrow"
            onClick={this.onRightClick}
          >
            {' '}
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
