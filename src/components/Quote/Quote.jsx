import React, { Component } from 'react'
import Highlight from '../Highlight/Highlight'

export default class Quote extends Component {
  render() {
    return (
        <div>
            <Highlight>Back</Highlight> of the <Highlight>net</Highlight>!
        </div>
    )
  }
}
