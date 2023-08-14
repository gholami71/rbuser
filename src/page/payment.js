import axios from "axios"
import { useEffect, useState } from "react"
import { OnRun } from "../config/OnRun"
import { ToastContainer, toast } from 'react-toastify';
import { BiSolidDiscount } from "react-icons/bi";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";

const Payment = () =>{
    const Navigate = useNavigate()
    const location = useLocation()
    const data = location.state.data
    const [discountCode,setDiscountCode] = useState('')
    const [df, setDf] = useState(null)


    const [phu] = useOutletContext()


    const CreatePayment = (level) =>{
        axios.post(OnRun+'/payment/create',{phu:phu,period:'data',level:level})
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
                            <h4>بسته</h4>
                            <h4>{df.period}</h4>
                            <h4>{df.labelName}</h4>
                        </div>
                        <h6 className="py-val">مبلغ قابل پرداخت</h6>
                        <div className={df.codestatus?"prc discount":"prc"}>
                            <div className="prc-bs">
                                <h4>{df.priceBaseInt}</h4>
                                <h6>{df.priceBaseHorof}</h6>
                            </div>
                            <div className="prc-bs">
                                <h4>{df.pricePayInt}</h4>
                                <h6>{df.pricePayHorof}</h6>
                            </div>
                        </div>
                        <div className="InpIcn">
                            <input placeholder="کد تخفیف" value={discountCode} onChange={(e)=>{setDiscountCode(e.target.value)}}/>
                            <div className="icn">                         
                                <span><BiSolidDiscount/></span>
                            </div>
                        </div>
                        {
                            df.codestatus?
                            <div className="code-msg">
                                <p>{df.codeMsg}</p>
                            </div>
                            :null
                        }
                        <button onClick={checkPayment}>اعمال کد تخفیف</button>
                    </>

                }



            </div>
            <button>خرید</button>
            <button className="cancel" onClick={()=>Navigate('/dashboard/pricing')}>لغو</button>
        </div>
    )
}
export default Payment