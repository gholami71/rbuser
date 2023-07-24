import { GoPerson } from "react-icons/go";
import { getCookie } from "../function/cookie";
import { OnRun } from '../config/OnRun'
import { useEffect, useState } from "react";
import axios from "axios"
import { BsXCircle, BsCheck2Circle } from "react-icons/bs";

const InfoUserMenu = () =>{
    const phu = getCookie('phu')
    const [userdata, setuserdata] = useState(null)
    
    const infoMenu = () =>{
        axios.post(OnRun+'/user/userinfo',{phu:phu})
        .then(response=>{
            if(response.data.reply){
                setuserdata(response.data.info)
            }
        })
    }

    useEffect(infoMenu, [])
    return(

        <>
        {
            userdata!=null?
                <div className="InfoUserMenu">
                    <div>
                        <span><GoPerson/></span>
                        <p>{userdata.name?userdata.name:userdata.phone}</p>
                        <p>{userdata.label}</p>
                    </div>
                    <div className={userdata.creditDay?'countdown credit':'countdown nocredit'}>
                        <span>{userdata.creditDay?<BsCheck2Circle/>:<BsXCircle/>}</span>
                        <p>{userdata.creditDay?userdata.creditDay + 'اعتبار دارید':'اعتبار ندارید'}</p>
                    </div>
                </div>
                :null
            }
        </>
        )

}
export default InfoUserMenu