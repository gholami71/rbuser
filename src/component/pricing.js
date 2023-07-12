import { useEffect, useState } from "react"


const Pricing = () =>{
    const [data, setData] = useState({time:1, label:''})
    const [price, setPrice] = useState({pro:1000, proPlus:1500,primium:2000})


    const handlePrice = () =>{
        setPrice({pro:1000*time, proPlus:1000*time,primium:1000*time})
    }

    useEffect(handlePrice,[data.time])

    return(
        <div className="container-page">
            <div className="TimePricing">
                <input type="radio" checked={data.time == 1} onChange={(e)=>setData({...data,time:e.target.value})} value='OneMonth' id="OneMonth"></input>
                <label htmlFor="OneMonth">یک ماهه</label>
                <input type="radio" checked={data.time == 3} onChange={(e)=>setData({...data,time:e.target.value})} value='TreeMonth' id="TreeMonth"></input>
                <label htmlFor="TreeMonth">سه ماهه</label>
                <input type="radio" checked={data.time == 6} onChange={(e)=>setData({...data,time:e.target.value})} value='SixMonth' id="SixMonth"></input>
                <label htmlFor="SixMonth">شش ماهه</label>
                <input type="radio" checked={data.time == 12} onChange={(e)=>setData({...data,time:e.target.value})} value='OnYear' id="OnYear"></input>
                <label htmlFor="OnYear">یک ساله</label>
            </div>
            <div className="TimeDetail">
                    <div>
                        <p>پریمیوم</p>
                        <p>نعداد هشدار در روز</p>
                        <p>قیمت {price.primium}</p>
                    </div>
                    
                    <div>
                        <p>پروپلاس</p>
                        <p>نعداد هشدار در روز</p>
                        <p>قیمت {price.proPlus}</p>
                     </div>
                    <div>
                        <p>پرو</p>
                        <p>نعداد هشدار در روز</p>
                        <p>قیمت{price.pro}</p>
                    </div>
            </div>
            
        </div>
    )

}
export default Pricing