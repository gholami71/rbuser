import { useEffect, useState } from "react"
import CreateAlarm from "../../component/CreateAlarm"
import axios from "axios"
import { OnRun } from "../../config/OnRun"
import { useOutletContext } from "react-router-dom";
import { MdDeleteForever,MdModeEditOutline } from "react-icons/md";
import { AiOutlineDelete,AiOutlinePlus } from "react-icons/ai";


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

    const handlDeleteAlarm = () =>{
        
    }

    useEffect(getAlarms, [])
    return(

        <div className="container-page elements">
            <div className="create" onClick={()=>setPopup(!popup)}>
                <span><AiOutlinePlus/></span>
                <h6>هشدار جدید</h6>
            </div>
            <CreateAlarm popup={popup} setPopup={setPopup}/>
            <div className="history">
                {
                  alarms.map(i =>{
                    return(
                        <div className="element-row">
                            <p>{i.symbol}</p>
                            <p>{i.AlarmtType}</p>
                            <p>{i.method}</p>
                            <p>{i.price}</p>
                            <p>{i.notification}</p>
                            <div className="AlarmsEdit">
                                <span onClick={handlDeleteAlarm}><MdDeleteForever/></span>
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