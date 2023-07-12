import { useState } from "react"


const Pricing = () =>{
    const [data, setData] = useState({time:'OneMonth', label:''})
    return(
        <div className="container-page">
            <div className="TimePricing">
                <input type="radio" checked={data.time == 'OneMonth'} onChange={(e)=>setData({...data,time:e.target.value})} value='OneMonth' id="OneMonth"></input>
                <label htmlFor="OneMonth">یک ماهه</label>
                <input type="radio" checked={data.time == 'TreeMonth'} onChange={(e)=>setData({...data,time:e.target.value})} value='TreeMonth' id="TreeMonth"></input>
                <label htmlFor="TreeMonth">سه ماهه</label>
                <input type="radio" checked={data.time == 'SixMonth'} onChange={(e)=>setData({...data,time:e.target.value})} value='SixMonth' id="SixMonth"></input>
                <label htmlFor="SixMonth">شش ماهه</label>
                <input type="radio" checked={data.time == 'OnYear'} onChange={(e)=>setData({...data,time:e.target.value})} value='OnYear' id="OnYear"></input>
                <label htmlFor="OnYear">یک ساله</label>
            </div>
            <div className="TimeDetail">
                {data.time == 'OneMonth'?
                    <div>
                        <p>پریمیوم</p>
                        <p>نعداد هشدار در روز</p>
                        <p>قیمت</p>
                    </div>
                    
                :data.time == 'TreeMonth'?
                    <div>
                        <p>پروپلاس</p>
                        <p>نعداد هشدار در روز</p>
                        <p>قیمت</p>
                     </div>
                :data.time == 'SixMonth'?
                    <div>
                        <p>پرو</p>
                        <p>نعداد هشدار در روز</p>
                        <p>قیمت</p>
                    </div>
                :data.time == 'OneYear'?
                    <div>
                        <p>پریمیوم</p>
                        <p>نعداد هشدار در روز</p>
                        <p>قیمت</p>
                    </div>
                :null

                }
                
                


            </div>
            
        </div>
    )

}
export default Pricing