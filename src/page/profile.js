import axios from "axios"
import { useEffect, useState } from "react"
import { OnRun } from "../config/OnRun"
import { ToastContainer, toast } from 'react-toastify';
import { emailPattern } from "../config/Regx";
import { useOutletContext } from "react-router-dom";

const Profile = () =>{
    const [data, setData] = useState({personality:'true',fullName:'',sex:'woman', email:'',companyName:'',address:'',idRegister:'',})
    const [phu] = useOutletContext()


    const apply = () =>{
        if (data.personality=='true' && data.fullName=='') {
            toast.warning('لطفا نام را کامل وارد کنید',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
        }else if (data.personality=='legal' && data.companyName=='') {
            toast.warning('لطفا شرکت را وارد کنید',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
        }else if (data.email=='') {
            toast.warning('لطفا نام را ایمیل وارد کنید',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
        }else if (!emailPattern.test(data.email)) {
            toast.warning('لطفا نام را ایمیل صحیح وارد کنید',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            
        }else{
            axios.post(OnRun+'/user/setprofile',{data:data,phu:phu})
                .then(response=>{
                    toast.success('پروفایل پروز شد',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
                })
                .catch(error=>{
                    toast.error('خطا'+error,{position: toast.POSITION.BOTTOM_RIGHT,className: 'error-toast'});
                })
        }
    }

    const getProfile = () =>{
        axios.post(OnRun+'/user/getprofile',{phu:phu})
        .then(response=>{
            if (response.data.reply) {
                setData(response.data.data)
            }else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
        })
        .catch(error=>{
            toast.error('خطا'+error,{position: toast.POSITION.BOTTOM_RIGHT,className: 'error-toast'});
        })
    }


    useEffect(getProfile,[])

    return(
        <div className="container-page profile">
            <ToastContainer autoClose={3000} />
            <fieldset>
                <input type="radio" checked={data.personality=='true'} onChange={(e)=>setData({...data,personality:e.target.value})} id="true" value="true" name="personality"/>
                <label htmlFor="true">حقیقی</label>
                <input type="radio" checked={data.personality=='legal'} onChange={(e)=>setData({...data,personality:e.target.value})} id="legal" value="legal" name="personality"/>
                <label  htmlFor="legal">حقوقی</label>
            </fieldset>
            {
                data.personality=='true'?
                <>
                    <fieldset>
                        <input value={data.fullName} onChange={(e)=>setData({...data,fullName:e.target.value})} placeholder="نام و نام خانوادگی"/>
                    </fieldset>
                    <fieldset>
                        <input type="radio" checked={data.sex=='man'} onChange={(e)=>setData({...data,sex:e.target.value})} id="sexMan" value="man" name="sex"/>
                        <label htmlFor="sexMan">مرد</label>
                        <input type="radio" checked={data.sex=='woman'} onChange={(e)=>setData({...data,sex:e.target.value})} id="sexWoman" value="woman" name="sex"/>
                        <label  htmlFor="sexWoman">زن</label>
                    </fieldset>

                </>
                :
                <>
                    <fieldset>
                        <input value={data.companyName} onChange={(e)=>setData({...data,companyName:e.target.value})} placeholder="نام شرکت"/>
                    </fieldset>
                    <fieldset>
                        <input value={data.address} onChange={(e)=>setData({...data,address:e.target.value})} placeholder="آدرس"/>
                    </fieldset>
                    <fieldset>
                        <input value={data.idRegister} onChange={(e)=>setData({...data,idRegister:e.target.value})} placeholder="شماره ثبت"/>
                    </fieldset>
                </>
            }
            <fieldset>
                <input value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} placeholder="ایمیل"/>
            </fieldset>
            <button onClick={apply}>ثبت</button>
        </div>
    )
}


export default Profile