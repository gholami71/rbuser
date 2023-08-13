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




    return(
        <div className="container-page payment">
            <ToastContainer autoClose={3000} />
            <h2 className="title">افزایش اشتراک</h2>
            <div className="detail">
                <div className="InpIcn">
                    <input placeholder="کد تخفیف" value={discountCode} onChange={(e)=>{setDiscountCode(e.target.value)}}/>
                    <div className="icn">                         
                        <span><BiSolidDiscount/></span>
                    </div>
                </div>
                <button>اعمال کد تخفیف</button>



            </div>
            <button>خرید</button>
            <button className="cancel" onClick={()=>Navigate('/dashboard/pricing')}>لغو</button>
        </div>
    )
}
export default Payment