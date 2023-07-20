import axios from "axios"
import { useState } from "react"
import { OnRun } from "../config/OnRun"
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { MdCancelPresentation } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";





const CreateTicket = (props) =>{
    const [ticket, setTicket] = useState({title:'',content:''})
    const [phu] = useOutletContext()


    const handlerSetTicket = () =>{
        axios.post(OnRun+'/user/setticket',{phu:phu,ticket:ticket})
        .then(response=>{
            if (response.data.reply) {
                toast.success('تیکت ثبت شد',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
                setTicket({title:'',content:''})
                props.setPopUp(false)
            }else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
        })
        .catch(err=>{
            toast.error(err,{position: toast.POSITION.BOTTOM_RIGHT,className: 'err-toast'});
        })
    }


    return(
        <>
        <ToastContainer autoClose={3000} />
        {
            props.popUp?
                <div className="PopUp">
                    <span className="closeIcon" onClick={(e)=>{props.setPopUp(!props.popUp)}}><RxCross1/></span>
                    <input className="TicketTitle" value={ticket.title} onChange={(e)=>setTicket({...ticket,title:e.target.value})} placeholder="عنوان"></input>
                    <textarea value={ticket.content} onChange={(e)=>setTicket({...ticket,content:e.target.value})} placeholder="درخواست"></textarea>
                    <button onClick={handlerSetTicket}>ثبت</button>
                </div>
                :null
        }
        </>
    )

}


export default CreateTicket