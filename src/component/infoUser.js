
import axios from "axios";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router";
import { FiMenu } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";


const InfoUser = () =>{
    const navigate = useNavigate()
    return(
        <div className="InfoUser">
            <div className="Info">
                <p className="icons"><FiMenu/></p>
                <ul>
                        <GoPerson/>
                    <li>
                        <p onClick={()=>navigate('profile')}>پروفایل</p>
                    </li>
                        <BiTimeFive/>
                    <li>
                        <p>تاریخچه اشتراک</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default InfoUser