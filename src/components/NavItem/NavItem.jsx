import React from 'react'

const NavItem = ({ className, href, children, logo }) => (
  <li className={`mh2-ns f6 f4-l tc ${className}`}>
    <a className="white no-underline" href=" ">
      {' '}
      {logo ? (
        <img src="./images/logo.svg" className="db center logo" alt="Logo" />
      ) : (
        children
      )}{' '}
    </a>{' '}
  </li>
)

export default NavItem
