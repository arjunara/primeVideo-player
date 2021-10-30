// Write your code here
import MoviesSlider from '../MoviesSlider'
import {
  AppBgContainer,
  PrimeImage,
  MovieTypeHeading,
  BottomSectionContainer,
  MovieCourousal,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovieList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMovieList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  return (
    <AppBgContainer>
      <PrimeImage
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <BottomSectionContainer>
        <MovieTypeHeading>Action Movies</MovieTypeHeading>
        <MovieCourousal>
          <MoviesSlider movieList={actionMovieList} />
        </MovieCourousal>
        <MovieTypeHeading>Comedy Movies</MovieTypeHeading>
        <MovieCourousal>
          <MoviesSlider movieList={comedyMovieList} />
        </MovieCourousal>
      </BottomSectionContainer>
    </AppBgContainer>
  )
}

export default PrimeVideo
