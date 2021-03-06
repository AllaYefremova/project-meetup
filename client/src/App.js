import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import Auth from './components/Auth/Auth'
import { useSelector } from 'react-redux'
import Travels from './components/Travels/Travels'
import UserFormEdit from './components/UserFormEdit/UserFormEdit'
import Hangouts from './components/Hangouts/Hangouts'
import TravelPage from './components/TravelPage/TravelPage'
import TravelPageCreate from './components/TravelPageCreate/TravelPageCreate'
import TravelPageEdit from './components/TravelPageEdit/TravelPageEdit'
import Map from './components/Map/Map'
import PeoplePage from './components/PeoplePage/PeoplePage'
import People from './components/People/People'

function App() {
  const token = window.localStorage.getItem('token')

  useEffect(() => {
    fetch('/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
  }, [])

  const isAuth = useSelector(store => store.user.isAuth)

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {isAuth === false ? <Auth /> : <Redirect to="/profile" />}
          </Route>

          <Route path="/hangouts">{isAuth === true ? <Hangouts /> : <Redirect to="/" />}</Route>

          <Route exact path="/travels">
            {isAuth === true ? <Travels /> : <Redirect to="/" />}
          </Route>

          <Route path="/travels/new">
            {isAuth === true ? <TravelPageCreate /> : <Redirect to="/" />}
          </Route>

          <Route path="/travels/:id/edit">
            {isAuth === true ? <TravelPageEdit /> : <Redirect to="/" />}
          </Route>

          <Route path="/travels/:id">
            {isAuth === true ? <TravelPage /> : <Redirect to="/" />}
          </Route>

          <Route path="/map">{isAuth === true ? <Map /> : <Redirect to="/" />}</Route>

          <Route exact path="/profile">
            {isAuth === true ? <Profile /> : <Redirect to="/" />}
          </Route>

          <Route path="/profile/edit">
            {isAuth === true ? <UserFormEdit /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/people">
            {isAuth === true ? <People /> : <Redirect to="/" />}
          </Route>

          <Route path="/people/:id">{isAuth === true ? <PeoplePage /> : <Redirect to="/" />}</Route>
        </Switch>
        {isAuth === true && (
          <div id="copyright">
            <ul>
              <li>&copy; MEETUP</li>
              <li>
                Design: <Link to="https://html5up.net">HTML5 UP</Link>
              </li>
              <li>
                Created by:{' '}
                <Link to="https://github.com/Alla-Yefremova/project-meetup">MEETUP Team</Link>
              </li>
            </ul>
          </div>
        )}
      </Router>
    </>
  )
}

export default App
