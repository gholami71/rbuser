
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FiMenu } from "react-icons/fi";
import { BiTimeFive ,BiUser} from "react-icons/bi";


const InfoUser = () =>{
    const navigate = useNavigate()
    return(
        <div className="InfoUser">
            <p className="icons"><FiMenu/></p>
            <ul>
                <li>
                    <span><BiUser/></span>
                    <p onClick={()=>navigate('profile')}>پروفایل</p>
                </li>
                <li>
                    <span><BiTimeFive/></span>
                    <p>تاریخچه اشتراک</p>
                </li>
            </ul>
        </div>
    )
}

export default InfoUser