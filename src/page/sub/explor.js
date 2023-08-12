
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai";
import CreateExplor from '../../component/CreateExplor';




const Explor = () =>{
    const [popup, setPopup] = useState(false)

    const handleNew = () =>{setPopup(!popup)}

    return(
        <div className="container-page elements">
            <ToastContainer autoClose={3000} />
            <div className="create" onClick={handleNew}>
                <span><AiOutlineSearch/></span>
                <h6>کاوش جدید</h6>
            </div>
            <CreateExplor popup={popup} setPopup={setPopup}/>


        </div>
    )
}

export default Explor