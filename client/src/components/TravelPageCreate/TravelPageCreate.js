import React from 'react'
import './TravelPageCreate.css'
import Header from '../Header/Header'
import { useHistory } from 'react-router-dom'

function TravelPageCreate(props) {
  const history = useHistory()
  const token = window.localStorage.getItem('token')
  const travelHandler = e => {
    e.preventDefault()
    fetch('http://localhost:4000/travels/new', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
        country: e.target.country.value,
        city: e.target.city.value,
        startDate: e.target.startDate.value,
        finishDate: e.target.finishDate.value,
        number: e.target.number.value,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          return history.push(`/travels/${data.travel._id}`)
        } else {
          alert('Не удалось cоздать travel')
        }
      })
  }

  return (
    <>
      <Header />
      <div id="main">
        <section className="post">
          <h2>Create your amazing trip</h2>

          <form onSubmit={travelHandler} method="post" className="formSignup">
            <div className="row gtr-uniform">
              <div className="col-12">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  autoComplete="off"
                  placeholder="Title your trip"
                  required
                  autoFocus
                />
              </div>

              <div className="col-12">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Put interesting and important information about this trip..."
                  rows="3"></textarea>
              </div>

              <div className="col-6 col-12-xsmall">
                <label>Country</label>

                <select className="form-control" name="country" required>
                  <option>AALAND ISLANDS</option>
                  <option>AFGHANISTAN</option>
                  <option>ALBANIA</option>
                  <option>ALGERIA</option>
                  <option>AMERICAN SAMOA</option>
                  <option>ANDORRA</option>
                  <option>ANGOLA</option>
                  <option>ANGUILLA</option>
                  <option>ANTARCTICA</option>
                  <option>ANTIGUA AND BARBUDA</option>
                  <option>ARGENTINA</option>
                  <option>ARMENIA</option>
                  <option>ARUBA</option>
                  <option>AUSTRALIA</option>
                  <option>AUSTRIA</option>
                  <option>AZERBAIJAN</option>
                  <option>BAHAMAS</option>
                  <option>BAHRAIN</option>
                  <option>BANGLADESH</option>
                  <option>BARBADOS</option>
                  <option>BELARUS</option>
                  <option>BELGIUM</option>
                  <option>BELIZE</option>
                  <option>BENIN</option>
                  <option>BERMUDA</option>
                  <option>BHUTAN</option>
                  <option>BOLIVIA</option>
                  <option>BOSNIA AND HERZEGOWINA</option>
                  <option>BOTSWANA</option>
                  <option>BOUVET ISLAND</option>
                  <option>BRAZIL</option>
                  <option>BRITISH INDIAN OCEAN TERRITORY</option>
                  <option>BRUNEI DARUSSALAM</option>
                  <option>BULGARIA</option>
                  <option>BURKINA FASO</option>
                  <option>BURUNDI</option>
                  <option>CAMBODIA</option>
                  <option>CAMEROON</option>
                  <option>CANADA</option>
                  <option>CAPE VERDE</option>
                  <option>CAYMAN ISLANDS</option>
                  <option>CENTRAL AFRICAN REPUBLIC</option>
                  <option>CHAD</option>
                  <option>CHILE</option>
                  <option>CHINA</option>
                  <option>CHRISTMAS ISLAND</option>
                  <option>COLOMBIA</option>
                  <option>COMOROS</option>
                  <option>COOK ISLANDS</option>
                  <option>COSTA RICA</option>
                  <option>COTE D'IVOIRE</option>
                  <option>CUBA</option>
                  <option>CYPRUS</option>
                  <option>CZECH REPUBLIC</option>
                  <option>DENMARK</option>
                  <option>DJIBOUTI</option>
                  <option>DOMINICA</option>
                  <option>DOMINICAN REPUBLIC</option>
                  <option>ECUADOR</option>
                  <option>EGYPT</option>
                  <option>EL SALVADOR</option>
                  <option>EQUATORIAL GUINEA</option>
                  <option>ERITREA</option>
                  <option>ESTONIA</option>
                  <option>ETHIOPIA</option>
                  <option>FAROE ISLANDS</option>
                  <option>FIJI</option>
                  <option>FINLAND</option>
                  <option>FRANCE</option>
                  <option>FRENCH GUIANA</option>
                  <option>FRENCH POLYNESIA</option>
                  <option>FRENCH SOUTHERN TERRITORIES</option>
                  <option>GABON</option>
                  <option>GAMBIA</option>
                  <option>GEORGIA</option>
                  <option>GERMANY</option>
                  <option>GHANA</option>
                  <option>GIBRALTAR</option>
                  <option>GREECE</option>
                  <option>GREENLAND</option>
                  <option>GRENADA</option>
                  <option>GUADELOUPE</option>
                  <option>GUAM</option>
                  <option>GUATEMALA</option>
                  <option>GUINEA</option>
                  <option>GUINEA-BISSAU</option>
                  <option>GUYANA</option>
                  <option>HAITI</option>
                  <option>HEARD AND MC DONALD ISLANDS</option>
                  <option>HONDURAS</option>
                  <option>HONG KONG</option>
                  <option>HUNGARY</option>
                  <option>ICELAND</option>
                  <option>INDIA</option>
                  <option>INDONESIA</option>
                  <option>IRAQ</option>
                  <option>IRELAND</option>
                  <option>ISRAEL</option>
                  <option>ITALY</option>
                  <option>JAMAICA</option>
                  <option>JAPAN</option>
                  <option>JORDAN</option>
                  <option>KAZAKHSTAN</option>
                  <option>KENYA</option>
                  <option>KIRIBATI</option>
                  <option>KUWAIT</option>
                  <option>KYRGYZSTAN</option>
                  <option>LAO PEOPLE'S DEMOCRATIC REPUBLIC</option>
                  <option>LATVIA</option>
                  <option>LEBANON</option>
                  <option>LESOTHO</option>
                  <option>LIBERIA</option>
                  <option>LIBYAN ARAB JAMAHIRIYA</option>
                  <option>LIECHTENSTEIN</option>
                  <option>LITHUANIA</option>
                  <option>LUXEMBOURG</option>
                  <option>MACAU</option>
                  <option>MADAGASCAR</option>
                  <option>MALAWI</option>
                  <option>MALAYSIA</option>
                  <option>MALDIVES</option>
                  <option>MALI</option>
                  <option>MALTA</option>
                  <option>MARSHALL ISLANDS</option>
                  <option>MARTINIQUE</option>
                  <option>MAURITANIA</option>
                  <option>MAURITIUS</option>
                  <option>MAYOTTE</option>
                  <option>MEXICO</option>
                  <option>MONACO</option>
                  <option>MONGOLIA</option>
                  <option>MONTSERRAT</option>
                  <option>MOROCCO</option>
                  <option>MOZAMBIQUE</option>
                  <option>MYANMAR</option>
                  <option>NAMIBIA</option>
                  <option>NAURU</option>
                  <option>NEPAL</option>
                  <option>NETHERLANDS</option>
                  <option>NETHERLANDS ANTILLES</option>
                  <option>NEW CALEDONIA</option>
                  <option>NEW ZEALAND</option>
                  <option>NICARAGUA</option>
                  <option>NIGER</option>
                  <option>NIGERIA</option>
                  <option>NIUE</option>
                  <option>NORFOLK ISLAND</option>
                  <option>NORTHERN MARIANA ISLANDS</option>
                  <option>NORWAY</option>
                  <option>OMAN</option>
                  <option>PAKISTAN</option>
                  <option>PALAU</option>
                  <option>PANAMA</option>
                  <option>PAPUA NEW GUINEA</option>
                  <option>PARAGUAY</option>
                  <option>PERU</option>
                  <option>PHILIPPINES</option>
                  <option>PITCAIRN</option>
                  <option>POLAND</option>
                  <option>PORTUGAL</option>
                  <option>PUERTO RICO</option>
                  <option>QATAR</option>
                  <option>REUNION</option>
                  <option>ROMANIA</option>
                  <option>RUSSIAN FEDERATION</option>
                  <option>RWANDA</option>
                  <option>SAINT HELENA</option>
                  <option>SAINT KITTS AND NEVIS</option>
                  <option>SAINT LUCIA</option>
                  <option>SAINT PIERRE AND MIQUELON</option>
                  <option>SAINT VINCENT AND THE GRENADINES</option>
                  <option>SAMOA</option>
                  <option>SAN MARINO</option>
                  <option>SAO TOME AND PRINCIPE</option>
                  <option>SAUDI ARABIA</option>
                  <option>SENEGAL</option>
                  <option>SERBIA AND MONTENEGRO</option>
                  <option>SEYCHELLES</option>
                  <option>SIERRA LEONE</option>
                  <option>SINGAPORE</option>
                  <option>SLOVAKIA</option>
                  <option>SLOVENIA</option>
                  <option>SOLOMON ISLANDS</option>
                  <option>SOMALIA</option>
                  <option>SOUTH AFRICA</option>
                  <option>SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</option>
                  <option>SPAIN</option>
                  <option>SRI LANKA</option>
                  <option>SUDAN</option>
                  <option>SURINAME</option>
                  <option>SVALBARD AND JAN MAYEN ISLANDS</option>
                  <option>SWAZILAND</option>
                  <option>SWEDEN</option>
                  <option>SWITZERLAND</option>
                  <option>SYRIAN ARAB REPUBLIC</option>
                  <option>TAIWAN</option>
                  <option>TAJIKISTAN</option>
                  <option>THAILAND</option>
                  <option>TIMOR-LESTE</option>
                  <option>TOGO</option>
                  <option>TOKELAU</option>
                  <option>TONGA</option>
                  <option>TRINIDAD AND TOBAGO</option>
                  <option>TUNISIA</option>
                  <option>TURKEY</option>
                  <option>TURKMENISTAN</option>
                  <option>TURKS AND CAICOS ISLANDS</option>
                  <option>TUVALU</option>
                  <option>UGANDA</option>
                  <option>UKRAINE</option>
                  <option>UNITED ARAB EMIRATES</option>
                  <option>UNITED KINGDOM</option>
                  <option>UNITED STATES</option>
                  <option>UNITED STATES MINOR OUTLYING ISLANDS</option>
                  <option>URUGUAY</option>
                  <option>UZBEKISTAN</option>
                  <option>VANUATU</option>
                  <option>VENEZUELA</option>
                  <option>VIET NAM</option>
                  <option>WALLIS AND FUTUNA ISLANDS</option>
                  <option>WESTERN SAHARA</option>
                  <option>YEMEN</option>
                  <option>ZAMBIA</option>
                  <option>ZIMBABWE</option>
                </select>
              </div>
              <div className="col-6 col-12-xsmall">
                <label>City</label>
                <input type="text" name="city" autoComplete="off" required />
              </div>
              <div className="col-6 col-12-xsmall">
                <label>Start date</label>
                <input type="date" name="startDate" min={Date.now()} max="2030-12-31" required />
              </div>

              <div className="col-6 col-12-xsmall">
                <label>End date</label>
                <input type="date" name="finishDate" min={Date.now()} max="2030-12-31" required />
              </div>
              <div className="col-6 col-12-xsmall">
                <label>Number of persons for this trip</label>
                <input type="number" name="number" min="1" max="100" required />
              </div>
            </div>

            <div className="col-12 travel-btn">
              <button className="button large">Create new travel</button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default TravelPageCreate
