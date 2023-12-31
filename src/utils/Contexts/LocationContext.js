import { createContext } from "react";

const LocationContext = createContext({
    cityName: "Gachibowli",
    lat: "17.4400802",
    lng: "78.3489168"
})

export default LocationContext