import { useEffect, useState } from "react"
import { SWIGGY_RES_API } from "./constants"

const useRestaurants = () => {

    const [resData, setResData] = useState(null)
    useEffect(()=>{
        getRestaurants()
    }, [])

    const getRestaurants = async () => {
        const data = await fetch(SWIGGY_RES_API)
        const json = data.json()
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

            // initialize checkData for Swiggy Restaurant data
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              setResData(checkData);
            }
          }
    }

    return resData;
}

export default useRestaurants