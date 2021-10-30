// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'
import {ThumbnailImage, PopUpContainer, Button} from './styledComponents'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={<ThumbnailImage src={thumbnailUrl} alt="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <PopUpContainer>
          <Button
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose size={35} />
          </Button>
          <ReactPlayer url={videoUrl} width={685} height={420} />
        </PopUpContainer>
      )}
    </Popup>
  )
}

export default MovieItem
