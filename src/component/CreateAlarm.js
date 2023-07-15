import axios from "axios"
import { useState } from "react"
import { OnRun } from "../config/OnRun"
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';



const CreateAlarm = (props) =>{

    const [InputUser, setInputUser] = useState({'symbol':'','AlarmtType':'قیمت', 'method':'بیشتر','price':'', 'notification':''})
    const [phu] = useOutletContext()
    
    const handlePopUp = () =>{
        props.setPopup(false)
        axios.post(OnRun+'/user/setalarm', {phu:phu, InputUser:InputUser}).then(response=>{
            if(response.data.reply){
                toast.success('هشدار جدید ثبت شد.',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
            else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
        })

    }
    const handleAlarmType = (e) =>{
        if (e.target.value=='قیمت') {
            setInputUser({...InputUser,AlarmtType:e.target.value,method:'بیشتر'})
        }
        if (e.target.value=='صف') {
            setInputUser({...InputUser,AlarmtType:e.target.value,method:'صف خرید شدن'})
        }
        if (e.target.value=='پیام ناظر') {
            setInputUser({...InputUser,AlarmtType:e.target.value,method:'همه'})
        }
    }
    console.log(InputUser)

        return(
            
            <>
            <ToastContainer autoClose={3000}/>
            {
                props.popup?
                <div className="PopUp">

                <div className="options">
                    <div>
                        <input list="symbols" placeholder="نماد" onChange={(e)=>{setInputUser({...InputUser,symbol:e.target.value})}}/>
                        <datalist id="symbols">
                            <option>خودرو</option>
                            <option>فولاد</option>
                            <option>ویسا</option>
                            <option>طلا</option>
                        </datalist>
                    </div>
                        
                    <div>
                        <select value={InputUser.AlarmtType} onChange={(e)=>{handleAlarmType(e)}}>
                            <option>قیمت</option>
                            <option>صف</option>
                            <option>پیام ناظر</option>
                        </select>
                    </div>
                    <div>
                        {
                            InputUser.AlarmtType == 'قیمت'?
                                <>
                                    <select value={InputUser.method} onChange={(e)=>{setInputUser({...InputUser,method:e.target.value})}}>
                                        <option>بیشتر</option>
                                        <option>کمتر</option>   
                                    </select>
                                    <input onChange={(e)=>{setInputUser({...InputUser,price:e.target.value})}} placeholder="فیمت"></input>
                                </>

                            :InputUser.AlarmtType == 'صف'?
                                <select value={InputUser.method} onChange={(e)=>{setInputUser({...InputUser,method:e.target.value})}}>
                                    <option>صف خرید شدن</option>
                                    <option>صف فروش شدن</option>   
                                    <option>ریختن صف خرید</option>   
                                    <option>جمع شدن صف فروش</option>   
                                </select>
                            :InputUser.AlarmtType == 'پیام ناظر'?
                
                                <select value={InputUser.method} onChange={(e)=>{setInputUser({...InputUser,method:e.target.value})}}>
                                    <option>همه</option>
                                    <option>بازگشایی</option>   
                                    <option>توقف</option>                
                                </select>

                            :null
                        }
                    </div>
                </div>
                <button onClick={handlePopUp}>ثبت</button>
                <button onClick={()=>{props.setPopup(false)}}>لغو</button>
            </div>
            :null
            }
            </>
    
        )
        
    }
export default CreateAlarm