import React, { Component } from 'react'
import attractions from './data/attractions'
import Attraction from './components/Attraction/Attraction'
import Nav from './components/Nav/Nav'
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="min-vh-100 ph4 flex flex-column">
          {/* navigation component */}
          {/* intro component */}
        </div>
        <div className="flex flex-wrap container">
          {/* attractions list component */}
          {attractions.map(item => (
            <Attraction {...item} />
          ))}
        </div>
      </div>
    )
  }
}
