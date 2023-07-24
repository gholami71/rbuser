
import { useNavigate } from "react-router";
import { FiMenu } from "react-icons/fi";
import { BiTimeFive ,BiUser} from "react-icons/bi";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";



const InfoUser = () =>{
    const navigate = useNavigate()
    const [status, setStatus] = useState(false)

    
    return(
        
        <div className="InfoUser" >
            
            <p className="icons" onClick={()=>{setStatus(!status)}}>{status? <RxCross1/> : <FiMenu/>}</p>
            {status?
                <>
                    <ul>
                        <li>
                            <span><BiUser/></span>
                            <p onClick={()=>navigate('profile')}>پروفایل</p>
                        </li>
                    
                        <li>
                            <span><BiTimeFive/></span>
                            <p onClick={()=>navigate('pricing')}>تعرفه ها</p>
                        </li>
                        <li>
                            <span><BiTimeFive/></span>
                            <p onClick={()=>navigate('support')}>پشتیبانی</p>
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