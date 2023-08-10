import axios from "axios"
import { useEffect, useState } from "react"
import { OnRun } from "../config/OnRun"
import { ToastContainer, toast } from 'react-toastify';

import { useOutletContext } from "react-router-dom";

const Pricing = () =>{

    const [data, setData] = useState({time:'1'})
    const [price, setPrice] = useState({
        '1': {pro:[{prc:36,unt:'هزار'}], proplus:[{prc:67,unt:'هزار'}],premium:[{prc:263,unt:'هزار'}]},
        '3': {pro:[{prc:107,unt:'هزار'}], proplus:[{prc:197,unt:'هزار'}],premium:[{prc:774,unt:'هزار'}]},
        '6': {pro:[{prc:208,unt:'هزار'}], proplus:[{prc:383,unt:'هزار'}],premium:[{prc:1,unt:'میلیون'},{prc:500,unt:'هزار'}]},
        '12':{pro:[{prc:390,unt:'هزار'}], proplus:[{prc:718,unt:'هزار'}],premium:[{prc:2,unt:'میلیون'},{prc:808,unt:'هزار'}]},
    })
    const [phu] = useOutletContext()


    const Payment = (level) =>{
        axios.post(OnRun+'/payment/create',{phu:phu,period:data,level:level})
        .then(response=>{
            if (response.data.reply) {
                console.log('https://api.payping.ir/v2/pay/gotoipg/'+response.data.responseCode)
                window.location.assign('https://api.payping.ir/v2/pay/gotoipg/'+response.data.responseCode)
            }else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
        })

    }




    return(
        <div className="container-page">
            <ToastContainer autoClose={3000} />
            <h2 className="title">افزایش اشتراک</h2>
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
                        <p>الویت سوم پشتیبانی</p>
                        <div className="pricBox">
                            <p>قیمت</p>
                            <div className="prcTikects">
                                {
                                    price[data.time]['pro'].map(i=>{
                                        return(
                                            <div className="Tikect">
                                                <p>{i.prc}</p>
                                                <p>{i.unt}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <button onClick={()=>Payment('pro')}>خرید</button>
                    </div>
                    
                    <div className="section">
                        <p className="type">پروپلاس</p>
                        <p>حداکثر 10 هشدار فعال</p>
                        <p>الویت دوم پشتیبانی</p>
                        <div className="pricBox">
                            <p>قیمت</p>
                            <div className="prcTikects">
                                {
                                    price[data.time]['proplus'].map(i=>{
                                        return(
                                            <div className="Tikect">
                                                <p>{i.prc}</p>
                                                <p>{i.unt}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button onClick={()=>Payment('proplus')}>خرید</button>
                     </div>
                     
                     <div className="section">
                        <p className="type">پریمیوم</p>
                        <p>حداکثر 40 هشدار فعال</p>
                        <p>الویت نخست پشتیبانی</p>
                        <div className="pricBox">
                            <p>قیمت</p>
                            <div className="prcTikects">
                                {
                                    price[data.time]['premium'].map(i=>{
                                        return(
                                            <div className="Tikect">
                                                <p>{i.prc}</p>
                                                <p>{i.unt}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button onClick={()=>Payment('premium')}>خرید</button>
                    </div>
            </div>
        </div>
    )
}
export default Pricing