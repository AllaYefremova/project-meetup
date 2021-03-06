import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import './Auth.css'

function Auth(props) {
  const [state, setState] = useState(true)

  // console.log(styles);

  const authHandler = () => {
    setState(!state)
  }

  return (
    <section className="media">
      <div id="intro">
        <h1 className='authLogo'>
          <button className='authLogo_link'>
            MeetUp
          </button>
        </h1>
        <p>
          A free app that connects members to a global community of travelers. 
          <br />
          Use MEETUP to find new friends and places.
        </p>
        {/* <ul className="actions">
          <li>
            <a href="/" className="button icon solid solo fa-arrow-down scrolly">
              Continue
            </a>
          </li>
        </ul> */}
      </div>
      <div id="footer">
        {state ? <Login authHandler={authHandler} /> : <Signup authHandler={authHandler} />}
      </div>
    </section>
  )
}

export default Auth
