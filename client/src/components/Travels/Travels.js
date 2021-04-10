import React from 'react'
import Header from '../Header/Header'
import UserCardSmall from '../UserCardSmall/UserCardSmall'
import TravelsListBig from '../TravelsListBig/TravelsListBig'

function Travels(props) {
  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <div className="row">
            <div className="col-3 col-12-small">
              <UserCardSmall />
            </div>
            <div className="col-9 col-12-small">
              <div id="main">
                <TravelsListBig />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Travels
