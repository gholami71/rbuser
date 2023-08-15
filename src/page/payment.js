import axios from "axios"
import { useEffect, useState } from "react"
import { OnRun } from "../config/OnRun"
import { ToastContainer, toast } from 'react-toastify';
import { BiSolidDiscount } from "react-icons/bi";
import { MdOutlineVerified } from "react-icons/md";
import { GoDot } from "react-icons/go";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { MiniLoader } from "../component/Loader";
const Payment = () =>{
    const Navigate = useNavigate()
    const location = useLocation()
    const data = location.state.data
    const [discountCode,setDiscountCode] = useState('')
    const [df, setDf] = useState(null)
    const [loader, setLoader] = useState(false)


    const [phu] = useOutletContext()


    const CreatePayment = () =>{
        setLoader(true)
        axios.post(OnRun+'/payment/create',{phu:phu,period:data,code:discountCode})
        .then(response=>{
            if (response.data.reply) {
                window.location.assign('https://api.payping.ir/v2/pay/gotoipg/'+response.data.responseCode)
            }else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
        })
    }


    const checkPayment = () =>{
        axios.post(OnRun+'/payment/checkperpayment',{phu:phu,data:data,code:discountCode})
        .then(response=>{
            if(response.data.reply){
                setDf(response.data.df)
            }else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
        })
    }



    useEffect(checkPayment,[])

    return(
        <div className="container-page payment">
            <ToastContainer autoClose={3000} />
            <h2 className="title">افزایش اشتراک</h2>
            <div className="detail">


                {
                    df==null?null:
                    <>
                        <div className="box">
                            <div className="icns">
                                <span><MdOutlineVerified /></span>
                            </div>
                            <div className="ttls">
                                <h4>{df.period}</h4>
                                <h4>{df.labelName}</h4>
                            </div>
                            <div className="prfr">
                                {Array.from({length:15}).map((_,i)=>{
                                    return(
                                        <span key={i}>
                                        </span>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="pay-box">
                            <h6 className="py-val">مبلغ قابل پرداخت</h6>

                            <div className={df.codestatus?"prc discount":"prc"}>
                                <div className="prc-bs">
                                    <h4>{(df.priceBaseInt).toLocaleString()} تومان</h4>
                                    <h6>{df.priceBaseHorof} تومان</h6>
                                </div>
                                <div className="prc-bs">
                                    <h4>{(df.pricePayInt).toLocaleString()} تومان</h4>
                                    <h6>{df.pricePayHorof} تومان</h6>
                                </div>
                            </div>
                            <div className="dt-dt">
                                <p>افزایش اشتراک تا تاریخ</p>
                                <p>{df.credit}</p>
                            </div>
                            <div className="InpIcn">
                                <input placeholder="کد تخفیف" value={discountCode} onChange={(e)=>{setDiscountCode(e.target.value)}}/>
                                <div className="icn">                         
                                    <span><BiSolidDiscount/></span>
                                </div>
                            </div>
                            {
                                df.codeMsg?
                                <div className="code-msg">
                                    <p>{df.codeMsg}</p>
                                </div>
                                :null
                            }
                            <button onClick={checkPayment}>اعمال کد تخفیف</button>
                            {
                                df.resetCredit?
                                <div className="alrt">
                                    <h6>توجه</h6>
                                    <p>با توجه به اینکه شما در حال ارتقاع سطح اشتراک خود هستید. بعد از تکمیل فرایند خرید زمان اشتراک قبلی شما از بین خواهد رفت. و اشتراک جدید جایگزین آن خواهد رفت</p>
                                </div>
                                :null
                            }

                        </div>
                    </>

                }



            </div>
            {
                loader?
                <MiniLoader />
                :
                <>
                    <button onClick={CreatePayment}>خرید</button>
                    <button className="cancel" onClick={()=>Navigate('/dashboard/pricing')}>لغو</button>
                </>
            }

        </div>
    )
}
export default Payment