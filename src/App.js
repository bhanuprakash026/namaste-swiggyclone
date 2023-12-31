import './App.css';
import { useState, useEffect, } from 'react'
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import LocationContext from './utils/Contexts/LocationContext';

const App = () => {
  const [cityName, setCityName] = useState("Gachibowli")
  const [latitude, setLatitude] = useState('17.4400802')
  const [longitude, setLongitude] = useState('78.3489168')

  useEffect(() => {
    // eslint-disable-next-line
    fetchNode()  
    // eslint-disable-next-line
  }, [cityName])

  const fetchNode = async () => {
    const data = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=fcc8045dcf854b96b8a383487732d421`)
    const json = await data.json()
    setLatitude(json?.results[0]?.geometry?.lat)
    setLongitude(json?.results[0]?.geometry?.lng)
  }
  // const defaultNode = {lng: "78.3489168", lat: "17.4400802"}

  return (
    <LocationContext.Provider value={{cityName: cityName, setCityName, lat: latitude, lng: longitude}}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </LocationContext.Provider>
    
  );
}

export default App;