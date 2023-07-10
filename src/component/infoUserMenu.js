import { GoPerson } from "react-icons/go";
import { getCookie } from "../function/cookie";
import { OnRun } from '../config/OnRun'
import { useEffect, useState } from "react";
import axios from "axios"

const InfoUserMenu = () =>{
    const phu = getCookie('phu')
    const [userdata, setuserdata] = useState({'fullName':'','lable':''})
    const [register, setRegister] = useState(false) 
    console.log(userdata)
    
    
    
    const infoMenu = () =>{
        axios.post(OnRun+'/user/userinfo',{phu:phu})
        .then(response=>{
            if(response.data.reply){
                setuserdata(response.data.info)
                setRegister(true)
                console.log(register)
                
            }
            else{
                setRegister(false)
            }

        })
    }

    useEffect(infoMenu, [])

    return(
        <div>
            {register?
            <>
                <div className="InfoUserMenu">
                    <span><GoPerson/></span>
                    <p>{userdata.fullName}</p>
                    <p>کاربر ویژه</p>
                </div>
                <br/>
            </>
            :
            <>
                <p>کاربر مهمان</p>
            </>
            }
            
        </div>
    )
}
export default InfoUserMenu