import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="card">
      <img src={imgUrl} alt={name} className="card-img" />
      <p className="card-description">{name}</p>
    </li>
  )
}

export default DestinationItem
