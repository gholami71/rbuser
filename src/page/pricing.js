import { useEffect, useState } from "react"


const Pricing = () =>{
    const [data, setData] = useState({time:1})
    const [price, setPrice] = useState({pro:1000, proPlus:1500,primium:2000})


    const handlePrice = () =>{
        if (data.time != 1) {
            setPrice({pro:(1000*data.time)*(1-(data.time/24)), proPlus:(1500*data.time)*(1-(data.time/24)),primium:(2000*data.time)*(1-(data.time/24))})            
        }
        else{
            setPrice({pro:1000*data.time, proPlus:1500*data.time,primium:2000*data.time})            

        }
    }

    useEffect(handlePrice,[data.time])

    return(
        <div className="container-page">
            <div className="TimePricing">
                <input type="radio" checked={data.time == 1} onChange={(e)=>setData({...data,time:e.target.value})} value='1' id="OneMonth"></input>
                <label htmlFor="OneMonth">یک ماهه</label>
                <input type="radio" checked={data.time == 3} onChange={(e)=>setData({...data,time:e.target.value})} value='3' id="TreeMonth"></input>
                <label htmlFor="TreeMonth">سه ماهه</label>
                <input type="radio" checked={data.time == 6} onChange={(e)=>setData({...data,time:e.target.value})} value='6' id="SixMonth"></input>
                <label htmlFor="SixMonth">شش ماهه</label>
                <input type="radio" checked={data.time == 12} onChange={(e)=>setData({...data,time:e.target.value})} value='12' id="OnYear"></input>
                <label htmlFor="OnYear">یک ساله</label>
            </div>
            <div className="TimeDetail">

                     <div className="price">
                        <p className="type">پرو</p>
                        <p>نعداد هشدار در روز</p>
                        <p>اولویت پشتیبانی:3</p>
                        <p>قیمت{price.pro}</p>
                        <button>خرید</button>
                    </div>
                    
                    <div className="price">
                        <p className="type">پروپلاس</p>
                        <p>نعداد هشدار در روز</p>
                        <p>اولویت پشتیبانی:2</p>
                        <p>قیمت {price.proPlus}</p>
                        <button>خرید</button>
                     </div>
                     
                     <div className="price">
                        <p className="type">پریمیوم</p>
                        <p>نعداد هشدار در روز</p>
                        <p>اولویت پشتیبانی:1</p>
                        <p>قیمت {price.primium}</p>
                        <button>خرید</button>
                    </div>
                   
            </div>
            
        </div>
    )

}
export default Pricing