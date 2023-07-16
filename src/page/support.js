import { useEffect, useState } from "react"
import { BiCommentAdd } from "react-icons/bi";
import CreateTicket from "../component/CreateTicket";
import axios from "axios";
import { OnRun } from "../config/OnRun";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineDelete,AiOutlinePlus } from "react-icons/ai";

const Support = () =>{
    const [popUp, setPopUp] = useState(false)
    const [history, setHistory] = useState([])
    const [phu] = useOutletContext()


    const handlerGetHistorySupport = ()=>{
        axios.post(OnRun+'/user/getticket',{phu:phu})
        .then(response=>{
            if(response.data.reply){
                console.log(response.data.df)
                setHistory(response.data.df)
            }else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'})
            }
        })
        .catch(err=>{
            toast.error(err,{position: toast.POSITION.BOTTOM_RIGHT,className: 'err-toast'});
        })
    }


    const delTicket = (id) =>{
        axios.post(OnRun+'/user/delticket', {id:id,phu:phu})
        .then(response=>{
            if (response.data.reply) {
                handlerGetHistorySupport()
                toast.success('تیکت حذف شد',{position: toast.POSITION.BOTTOM_RIGHT,className: 'position-toast'})
            }else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'})
            }
        })
        .catch(err=>{
            toast.error(err,{position: toast.POSITION.BOTTOM_RIGHT,className: 'err-toast'});
        })
    }



    useEffect(handlerGetHistorySupport,[])
    return(
        <div className="container-page support">
            <ToastContainer autoClose={3000} />
            <CreateTicket popUp={popUp} setPopUp={setPopUp}/>
            <div className="create1" onClick={()=>setPopUp(!popUp)}>
                <span><AiOutlinePlus/></span>
                <h6>ایجاد تیکت</h6>
            </div>
            <div className="history">
                {
                    history.map(i=>{
                        return(
                            <div key={i._id} className="ticket-row">
                                    <h4 className="date">{i.date}</h4>
                                    <h3 className="title">{i.title}</h3>
                                    <h5 className="content">{i.content}</h5>
                                    <p>درحال بررسی</p>
                                    <span onClick={()=>delTicket(i._id)}><AiOutlineDelete/></span>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )

}
export default Support