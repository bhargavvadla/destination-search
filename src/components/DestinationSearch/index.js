import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(e =>
      e.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchInput)
    return (
      <div className="app-container">
        <div className="search-container">
          <h1 className="search-heading"> Destination Search</h1>
          <div className="search-box">
            <input
              type="search"
              className="search-input"
              placeholder="search"
              value={searchInput}
              onChange={this.onChangeInput}
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
        </div>
        <ul className="destination-container">
          {searchResults.map(e => (
            <DestinationItem destinationDetails={e} key={e.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
