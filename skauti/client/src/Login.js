import React, { Component } from 'react'
import { Link} from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (            
      <div className='Login'>
        <p>SKAUTi</p>
        <div className='login__window'>
            <h1>that place you saw that one time...</h1>
            <Link to='/gallery'> <button >Log in </button> </Link>
            <Link to='/gallery'> <button >Sign up </button> </Link>
        </div>
      </div>
    )
  }
}
 