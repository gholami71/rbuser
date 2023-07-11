import { useState } from "react"
import CreateAlarm from "../../component/CreateAlarm"

const Alarms = () =>{
    const [popup, setPopup] = useState(false)
    return(
        <div className="alarms">
            <div className="btns">
                <span className="btn" onClick={()=>{setPopup(!popup)}}>هشدار جدید</span>
            </div>
            <CreateAlarm popup={popup} setPopup={setPopup}/>
        </div>
        
    )
}
export default Alarms