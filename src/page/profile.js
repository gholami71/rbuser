import axios from "axios"
import { useEffect, useState } from "react"
import { OnRun } from "../config/OnRun"
import { ToastContainer, toast } from 'react-toastify';
import { emailPattern } from "../config/Regx";
import { useOutletContext } from "react-router-dom";
import { MdDriveFileRenameOutline , MdOutlineAlternateEmail , MdLocationOn, MdNumbers} from "react-icons/md";
import { BsGenderAmbiguous} from "react-icons/bs";

const Profile = () =>{
    const [data, setData] = useState({personality:'true',fullName:'',sex:'woman', email:'',companyName:'',address:'',idRegister:''})

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
                if (response.data.data.personality) {
                    setData(response.data.data)
                }
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
            <h2 className="title">پروفایل</h2>

            <div className="InpRdiIcn">
                <div className="rdi">
                    <input type="radio" checked={data.personality=='true'} onChange={(e)=>setData({...data,personality:e.target.value})} id="true" value="true" name="personality"/>
                    <label htmlFor="true">حقیقی</label>
                    <input type="radio" checked={data.personality=='legal'} onChange={(e)=>setData({...data,personality:e.target.value})} id="legal" value="legal" name="personality"/>
                    <label  htmlFor="legal">حقوقی</label>
                </div>
                <div className='icn'>
                    <span><BsGenderAmbiguous/></span>
                </div>
            </div>
            {
                data.personality=='true'?
                <>
                    <div className="InpIcn">
                        <input value={data.fullName} onChange={(e)=>setData({...data,fullName:e.target.value})} placeholder="نام و نام خانوادگی"/>
                        <div className='icn'>
                            <span><MdDriveFileRenameOutline/></span>
                        </div>
                    </div>
                    <div className="InpRdiIcn">
                        <div className="rdi">
                            <input type="radio" checked={data.sex=='man'} onChange={(e)=>setData({...data,sex:e.target.value})} id="sexMan" value="man" name="sex"/>
                            <label htmlFor="sexMan">مرد</label>
                            <input type="radio" checked={data.sex=='woman'} onChange={(e)=>setData({...data,sex:e.target.value})} id="sexWoman" value="woman" name="sex"/>
                            <label  htmlFor="sexWoman">زن</label>
                        </div>
                        <div className='icn'>
                            <span><BsGenderAmbiguous/></span>
                        </div>

                    </div>

                </>
                :
                <>
                    <div className="InpIcn">
                        <input value={data.companyName} onChange={(e)=>setData({...data,companyName:e.target.value})} placeholder="نام شرکت"/>
                        <div className='icn'>
                            <span><MdDriveFileRenameOutline/></span>
                        </div>
                    </div>
                    <div className="InpIcn">
                        <input value={data.address} onChange={(e)=>setData({...data,address:e.target.value})} placeholder="آدرس"/>
                        <div className='icn'>
                            <span><MdLocationOn/></span>
                        </div>
                    </div>
                    <div className="InpIcn">
                        <input value={data.idRegister} onChange={(e)=>setData({...data,idRegister:e.target.value})} placeholder="شماره ثبت"/>
                        <div className='icn'>
                            <span><MdNumbers/></span>
                        </div>
                    </div>
                </>
            }
            <div className="InpIcn">
                <input value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} placeholder="ایمیل"/>
                <div className='icn'>
                    <span><MdOutlineAlternateEmail/></span>
                </div>
            </div>
            <button onClick={apply}>ثبت</button>
        </div>
    )
}


export default Profile