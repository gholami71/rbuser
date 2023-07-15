import { useEffect, useState } from "react"
import CreateAlarm from "../../component/CreateAlarm"
import axios from "axios"
import { OnRun } from "../../config/OnRun"
import { useOutletContext } from "react-router-dom";
import { MdDeleteForever,MdModeEditOutline } from "react-icons/md";

const Alarms = () =>{
    const [popup, setPopup] = useState(false)
    const [phu] = useOutletContext()
    const [alarms, setAlarms] = useState([])

    const getAlarms = () =>{
        axios.post(OnRun+'/user/getalarm', {phu:phu}).then(response =>{
            if (response.data.reply){
                setAlarms(response.data.alarms)    
            }
            else{


            }
        })    
    }

    useEffect(getAlarms, [])
    return(

        <div className="container-page alarms">
            <div className="btns">
                <span className="btn" onClick={()=>{setPopup(!popup)}}>هشدار جدید</span>
            </div>
            <CreateAlarm popup={popup} setPopup={setPopup}/>
            <div>
                {
                  alarms.map(i =>{
                    return(
                        <div>
                            <p>{i.symbol}</p>
                            <p>{i.AlarmtType}</p>
                            <p>{i.method}</p>
                            <p>{i.price}</p>
                            <p>{i.notification}</p>
                            <div>
                                <span><MdDeleteForever/></span>
                                <span><MdModeEditOutline/></span>
                            </div>
                        </div>
                    )
                  })
                }
            </div>
        </div>
        
    )
}
export default Alarms