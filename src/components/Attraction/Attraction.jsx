import React from 'react'

class Attraction extends React.Component {
  render() {
    return (
      <div>
        {/* pass along all our props and state to the component */}
        <Info {...this.props} {...this.state} />
        {/* …our other components */}
      </div>
    )
  }
}
export default Attraction
