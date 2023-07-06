import axios from "axios"
import { useState } from "react"
import { OnRun } from "../config/OnRun"
import { ToastContainer, toast } from 'react-toastify';
import { emailPattern } from "../config/Regx";


const Profile = () =>{
    const [data, setData] = useState({fullName:'',sex:'woman', email:''})


    const apply = () =>{
        if (data.fullName=='') {
            toast.warning('لطفا نام را کامل وارد کنید',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
        }else if (data.email=='') {
            toast.warning('لطفا نام را ایمیل وارد کنید',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
        }else if (!emailPattern.test(data.email)) {
            toast.warning('لطفا نام را ایمیل صحیح وارد کنید',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            
        }else{
            axios.post(OnRun+'/user/setprofile',data)
                .then(response=>{
                    console.log(response.data)
                })
        }
    }


    return(
        <div>
            <ToastContainer autoClose={3000} />
            <fieldset>
                <input value={data.fullName} onChange={(e)=>setData({...data,fullName:e.target.value})} placeholder="نام و نام خانوادگی"/>
            </fieldset>
            <fieldset>
                <input type="radio" checked={data.sex=='man'} onChange={(e)=>setData({...data,sex:e.target.value})} id="sexMan" value="man" name="sex"/>
                <label htmlFor="sexMan">مرد</label>
                <input type="radio" checked={data.sex=='woman'} onChange={(e)=>setData({...data,sex:e.target.value})} id="sexWoman" value="woman" name="sex"/>
                <label  htmlFor="sexWoman">مرد</label>
            </fieldset>
            <fieldset>
                <input value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} placeholder="ایمیل"/>
            </fieldset>
            <button onClick={apply}>ثبت</button>
        </div>
    )
}


export default Profile