
import axios from "axios";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { OnRun } from "../config/OnRun";
import { getCookie } from "../function/cookie";


const InfoUser = () =>{

    const [userCredit, setuserCredit] = useState({'datecredit':'', 'lable':''})

    const cookie = getCookie('phu')


    const UserInfo  = () =>{
        axios.post(OnRun+'/user/userinfo', {cookie:cookie})
        .then(Response=>{
            console.log(Response.data)
        })

    }

    useEffect(UserInfo, [])

    return(
        <div className="InfoUser">
            <div className="Info">
                <p className="icons"><CiUser/></p>
                <ul>
                    <li>
                        <p>پروفایل</p>
                    </li>
                    <li>
                        <p>تاریخچه اشتراک</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default InfoUser