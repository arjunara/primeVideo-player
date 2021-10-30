// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {movieList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {movieList.map(eachMovie => (
        <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
