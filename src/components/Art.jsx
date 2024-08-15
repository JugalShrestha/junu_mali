import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Art = ({photo}) => {
  return (
    <div className='art'>
    <Link to={"/art"+photo} className="art">
          <img src={photo}/>
    </Link>
    </div>
  )
}

Art.propTypes = {
  photo: PropTypes.string.isRequired,
}

export default Art