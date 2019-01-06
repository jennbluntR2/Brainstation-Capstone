import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className='navbar'>
          <Link to='/gallery'><img src='/logo_transparent.png' alt='SKAUTi logo'/> </Link>
        </div> 
      </div>
 
    )
  }
}
 