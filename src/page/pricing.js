import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import { price } from "../config/priceObject";

const Pricing = () =>{

    const [data, setData] = useState({time:'1'})

    const Navigate = useNavigate()



    const toPayment = (level) =>{
        Navigate('/dashboard/payment',{state:{data:{time:data.time,level:level}}})

    }



    return(
        <div className="container-page">
            <ToastContainer autoClose={3000} />
            <h2 className="title">تعرفه ها</h2>
            <div className="TimePricing">
                <input type="radio" checked={data.time === '1'} onChange={(e)=>setData({...data,time:e.target.value})} value='1' id="OneMonth"></input>
                <label htmlFor="OneMonth">یک ماهه</label>
                <input type="radio" checked={data.time === '3'} onChange={(e)=>setData({...data,time:e.target.value})} value='3' id="TreeMonth"></input>
                <label htmlFor="TreeMonth">سه ماهه</label>
                <input type="radio" checked={data.time === '6'} onChange={(e)=>setData({...data,time:e.target.value})} value='6' id="SixMonth"></input>
                <label htmlFor="SixMonth">شش ماهه</label>
                <input type="radio" checked={data.time === '12'} onChange={(e)=>setData({...data,time:e.target.value})} value='12' id="OnYear"></input>
                <label htmlFor="OnYear">یک ساله</label>
            </div>
            <div className="TimeDetail">
                     <div className="section">
                        <p className="type">پرو</p>
                        <p>حداکثر 5 هشدار فعال</p>
                        <p>حداکثر 1 شرط برای کاوش</p>
                        <p>اولویت سوم پشتیبانی</p>
                        <div className="pricBox">
                            <p>قیمت</p>
                            <div className="prcTikects">
                                {
                                    price[data.time]['pro'].map(i=>{
                                        return(
                                            <div key={Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000} className="Tikect">
                                                <p>{i.prc}</p>
                                                <p>{i.unt}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button onClick={()=>toPayment('pro')}>خرید</button>
                    </div>
                    
                    <div className="section">
                        <p className="type">پروپلاس</p>
                        <p>حداکثر 10 هشدار فعال</p>
                        <p>حداکثر 3 شرط برای کاوش</p>
                        <p>اولویت دوم پشتیبانی</p>
                        <div className="pricBox">
                            <p>قیمت</p>
                            <div className="prcTikects">
                                {
                                    price[data.time]['proplus'].map(i=>{
                                        return(
                                            <div key={Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000} className="Tikect">
                                                <p>{i.prc}</p>
                                                <p>{i.unt}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button onClick={()=>toPayment('proplus')}>خرید</button>
                     </div>
                     
                     <div className="section">
                        <p className="type">پریمیوم</p>
                        <p>حداکثر 40 هشدار فعال</p>
                        <p>حداکثر 9 شرط برای کاوش</p>
                        <p>اولویت نخست پشتیبانی</p>
                        <div className="pricBox">
                            <p>قیمت</p>
                            <div className="prcTikects">
                                {
                                    price[data.time]['premium'].map(i=>{
                                        return(
                                            <div key={Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000} className="Tikect">
                                                <p>{i.prc}</p>
                                                <p>{i.unt}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button onClick={()=>toPayment('premium')}>خرید</button>
                    </div>
            </div>
        </div>
    )
}
export default Pricing