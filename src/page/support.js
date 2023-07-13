import { useEffect, useState } from "react"


const Support = () =>{
    const [data, setData] = useState({time:1})
    const [price, setPrice] = useState({pro:1000, proPlus:1500,primium:2000})


    const handlePrice = () =>{
        if (data.time != 1) {
            setPrice({pro:(1000*data.time)*(1-(data.time/24)), proPlus:(1500*data.time)*(1-(data.time/24)),primium:(2000*data.time)*(1-(data.time/24))})            
        }
        else{
            setPrice({pro:1000*data.time, proPlus:1500*data.time,primium:2000*data.time})            

        }
        console.log(data)
    }

    useEffect(handlePrice,[data.time])

    return(
        <div className="container-page">

        </div>
    )

}
export default Support