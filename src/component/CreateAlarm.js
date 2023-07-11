import { useState } from "react"

const CreateAlarm = (props) =>{

    const [InputUser, setInputUser] = useState({'symbol':'','AlarmtType':'قیمت', 'method':'بیشتر','price':'', 'notification':''})
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

    if (props.popup) {
        return(
            

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
                <button onClick={()=>{props.setPopup(false)}}>ثبت</button>
                <button onClick={()=>{props.setPopup(false)}}>لغو</button>
            </div>
            
    
        )
        
    }
    }
export default CreateAlarm