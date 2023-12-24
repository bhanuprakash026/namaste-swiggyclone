import { useState, useEffect } from 'react'
import { RES_MENU_API } from '../Components/constants'

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null)

  useEffect(() => {
    fetchMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMenu = async () => {
    const URL = RES_MENU_API
    const data = await fetch(URL+resId)
    const json = await data.json()
    setResInfo(json.data)
  }

  return resInfo

}

export default useRestaurantMenu