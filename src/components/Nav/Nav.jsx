import React from 'react'
import menu from '../../data/menu'
import NavItem from '../NavItem/NavItem'

const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map(item => (
        <NavItem {...item} />
      ))}
    </ul>
  </nav>
)

export default Nav
