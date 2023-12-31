import { useEffect, useState } from "react"
import CreateAlarm from "../../component/CreateAlarm"
import axios from "axios"
import { OnRun } from "../../config/OnRun"
import { useOutletContext } from "react-router-dom";
import { MdDeleteForever,MdModeEditOutline } from "react-icons/md";
import { AiOutlineDelete,AiOutlinePlus } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';



const Alarms = () =>{
    const [popup, setPopup] = useState(false)
    const [phu] = useOutletContext()
    const [alarms, setAlarms] = useState([])
    const [editAlarms, setEditAlarms] = useState(null)




    const getAlarms = () =>{
        axios.post(OnRun+'/user/getalarm', {phu:phu}).then(response =>{
            if (response.data.reply){
                setAlarms(response.data.alarms)
            }
            else{
                setAlarms([])
            }
        })    
    }

    const handlDeleteAlarm = (id) =>{
        axios.post(OnRun+'/user/delalarm', {phu:phu,id:id}).then(
            response=>{
                if(response.data.reply){
                    toast.warning('هشدار با موفقیت پاک شد',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'})
                    getAlarms()

                }
            }
        )
        
    }

    const handleEdit = (i) =>{
        setEditAlarms(i)
        setPopup(true)
    }

    const handleNew = () =>{
        setPopup(!popup)
        setEditAlarms(null)
    }



    useEffect(getAlarms, [popup])


    return(
        <div className="container-page elements">
            <ToastContainer autoClose={3000} />
            <div className="create" onClick={handleNew}>
                <span><AiOutlinePlus/></span>
                <h6>هشدار جدید</h6>
            </div>
            <CreateAlarm editAlarms={editAlarms} getAlarms={getAlarms} popup={popup} setPopup={setPopup}/>
            <div className="history">
                {
                    alarms.map(i =>{
                        return(
                            <div key={i['_id']} className="element-row">
                                <p>{i.symbol}</p>
                                <p>{i.AlarmtType}</p>
                                <p>{i.method}</p>
                                <p>{i.price}</p>
                                <p>{i.active?'در انتظار':'غیرفعال'}</p>
                                <p>{i.notification}</p>
                                <div className="AlarmsEdit">
                                    <span onClick={()=>handlDeleteAlarm(i['_id'])}><MdDeleteForever/></span>
                                    <span onClick={()=>handleEdit(i)}><MdModeEditOutline/></span>
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