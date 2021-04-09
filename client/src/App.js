import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Profile from './components/Profile/Profile'
import Auth from './components/Auth/Auth'
import Main from './components/Profile/Profile'
import store from './redux/store'
import { Provider } from 'react-redux'
import Travels from './components/Travels/Travels'
import CardUser from './components/CardUser/CardUser'
import FormEdit from './components/FormEdit/FormEdit'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Auth />
            {/* <CardUser /> */}
          </Route>

          <Route path="/dashboard">
            <Main />
          </Route>

          <Route path="/travels">
            <Travels />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
    
            <Route path="/profile/edit">
              <FormEdit />
            </Route>

        </Switch>
      </Router>
    </Provider>
  )
}

export default App
