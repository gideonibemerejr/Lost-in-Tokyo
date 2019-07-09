import React, { Component } from 'react'
import attractions from './data/attractions'
import Attraction from './components/Attraction/Attraction'
import Nav from './components/Nav/Nav'
import './index.css'
import IntroText from './components/IntroText/IntroText'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="min-vh-100 ph4 flex flex-column">
          {/* navigation component */}
          <Nav />
          {/* intro component */}
          <IntroText />
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
