
import { useNavigate } from "react-router";
import { FiMenu } from "react-icons/fi";
import { BiTimeFive ,BiUser} from "react-icons/bi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";



const InfoUser = () =>{
    const navigate = useNavigate()
    const [status, setStatus] = useState(false)

    const goTo = (goTo) =>{
        setStatus(false)
        navigate(goTo)
    }


    
    return(
        
        <div className="InfoUser" >
            
            <p className="icons" onClick={()=>{setStatus(!status)}}>{status? <RxCross1/> : <FiMenu/>}</p>
            {status?
                <>
                    <ul>
                        <li onClick={()=>goTo('profile')}>
                            <span><BiUser/></span>
                            <p>پروفایل</p>
                        </li>
                    
                        <li onClick={()=>goTo('pricing')}>
                            <span><BiTimeFive/></span>
                            <p >تعرفه ها</p>
                        </li>
                        <li onClick={()=>goTo('support')}>
                            <span><BiTimeFive/></span>
                            <p >پشتیبانی</p>
                        </li>
                    </ul>
                    <div className="hide" onClick={()=>setStatus(false)}></div>
                </>
            
            :null

            }
            
        </div>
    )
}

export default InfoUser