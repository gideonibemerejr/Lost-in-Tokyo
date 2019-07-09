import React from 'react'
import Overlay from '../Overlay/Overlay'
class Attraction extends React.Component {
  state = { showInfo: false }

  toggleInfo = () => {
    this.setState((prevState, props) => ({
      showInfo: !prevState.showInfo
    }))
  }

  closeInfo = () => {
    this.setState({
      showInfo: false
    })
  }
  render() {
    const { title, description, className, image } = this.props
    const { showInfo } = this.state
    return (
      <div
        className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
        onMouseEnter={this.toggleInfo}
        onMouseLeave={this.closeInfo}
      >
        <div className="relative">
          <Overlay {...this.props} {...this.state} />
          <img alt="" src={`../images/${image}`} className="db" />
        </div>
      </div>
    )
  }
}
export default Attraction
