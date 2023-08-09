import axios from "axios"
import { useEffect, useState } from "react"
import { OnRun } from "../config/OnRun"
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { MdDriveFileRenameOutline , MdOutlineAlternateEmail , MdLocationOn, MdNumbers} from "react-icons/md";
import { MdCancelPresentation,MdAttachMoney,MdStackedLineChart } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { VscSymbolNumeric } from "react-icons/vsc";
import { LuAlignEndHorizontal } from "react-icons/lu";
import { AiOutlineBranches } from "react-icons/ai";







const CreateAlarm = (props) =>{

    const [InputUser, setInputUser] = useState({'symbol':'','AlarmtType':'قیمت', 'method':'بیشتر','price':'', 'notification':''})
    const [phu] = useOutletContext()
    const [symbols, setSymbols] = useState([])

    const getSymbol = () =>{
        axios.post(OnRun+'/user/getsymbols', {phu:phu})
        .then(response=>{
            if(response.data.reply){
                setSymbols(response.data.symbols)
            }
            else{

            }
        })
    }

    const handleEdit = () =>{
        if (props.editAlarms!=null) {
            setInputUser(props.editAlarms)
        }else{
            setInputUser({'symbol':'','AlarmtType':'قیمت', 'method':'بیشتر','price':'', 'notification':''})
        }
    }

    useEffect(getSymbol,[])
    useEffect(handleEdit,[props.editAlarms])
    
    const handlePopUp = () =>{
        if(!symbols.includes(InputUser.symbol)){
            toast.warning('فیلد نماد صحیح نیست',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
        }
        else if((InputUser.AlarmtType == 'قیمت') && (isNaN(InputUser.price) || InputUser.price<=0)){

                toast.warning('لطفا مقدار قیمت را صحیح وارد کنید ',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
        }
        else{
            axios.post(OnRun+'/user/setalarm', {phu:phu, InputUser:InputUser}).then(response=>{
                if(response.data.reply){
                    props.setPopup(false)
                    props.getAlarms()
                    toast.success('هشدار ثبت شد.',{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
            else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
        })

        }

    }
    const handleAlarmType = (e) =>{
        if (e.target.value=='قیمت') {
            setInputUser({...InputUser,AlarmtType:e.target.value,method:'بیشتر'})
        }
        if (e.target.value=='صف') {
            setInputUser({...InputUser,AlarmtType:e.target.value,method:'صف خرید شدن'})
        }
        if (e.target.value=='پیام ناظر') {
            setInputUser({...InputUser,AlarmtType:e.target.value,method:'همه'})
        }
    }

        return(
            
            <>
            <ToastContainer autoClose={3000}/>
            {
                props.popup?
                <>
                    <div className="PopUp">
                        <span className="closeIcon" onClick={()=>{props.setPopup(false)}}><RxCross1/></span>

                    <div className="options">
                        <div className="InpIcn">
                            
                            <input list="symbols" placeholder="نماد" value={InputUser.symbol} onChange={(e)=>{setInputUser({...InputUser,symbol:e.target.value})}}/>
                            <datalist id="symbols">
                                {
                                    symbols.map(i=>{
                                        return(
                                            <option key={i}>{i}</option>
                                        )
                                    
                                    })
                                }

                            </datalist>
                            <div className="icn">                         
                                <span><VscSymbolNumeric/></span>
                            </div>
                        </div>
                            
                        <div className="InpIcn">
                            <select value={InputUser.AlarmtType} onChange={(e)=>{handleAlarmType(e)}}>
                                <option>قیمت</option>
                                <option>صف</option>
                                <option>پیام ناظر</option>
                            </select>
                            <div className="icn">                         
                                <span><MdDriveFileRenameOutline/></span>
                            </div>

                        </div>
                        <div>
                            {
                                InputUser.AlarmtType == 'قیمت'?
                                    <>
                                        <div className="InpIcn">
                                                            
                                            <input type="number" value={InputUser.price} onChange={(e)=>{setInputUser({...InputUser,price:e.target.value})}} placeholder="قیمت"></input>
                                            <div className="icn">                         
                                                <span><MdAttachMoney/></span>
                                            </div>
                                        </div>
                                        <div className="InpIcn">
                                            <select value={InputUser.method} onChange={(e)=>{setInputUser({...InputUser,method:e.target.value})}}>
                                                <option>بیشتر</option>
                                                <option>کمتر</option>   
                                            </select>
                                            <div className="icn">                         
                                                <span><LuAlignEndHorizontal/></span>
                                            </div>
                                        </div>                                   
                                    </>

                                :InputUser.AlarmtType == 'صف'?
                                <div  className="InpIcn">
                                    <select value={InputUser.method} onChange={(e)=>{setInputUser({...InputUser,method:e.target.value})}}>
                                        <option>صف خرید شدن</option>
                                        <option>صف فروش شدن</option>   
                                        <option>ریختن صف خرید</option>   
                                        <option>جمع شدن صف فروش</option>   
                                    </select>
                                    <div className="icn">                         
                                        <span><MdStackedLineChart/></span>
                                    </div>
                                </div>
                                
                                :InputUser.AlarmtType == 'پیام ناظر'?
                                    <div  className="InpIcn">
                                        <select value={InputUser.method} onChange={(e)=>{setInputUser({...InputUser,method:e.target.value})}}>
                                            <option>همه</option>
                                            <option>بازگشایی</option>   
                                            <option>توقف</option>                
                                        </select>
                                        <div className="icn">                         
                                            <span><AiOutlineBranches/></span>
                                        </div>                                   
                                    </div>
                                :null
                                }
                            </div>
                        </div>
                        <button type="submit" onClick={handlePopUp}>ثبت</button>
                        <button  onClick={()=>{props.setPopup(false)}}>لغو</button>
                    </div>

                    <div className="hide" onClick={()=>props.setPopup(false)}></div>
                </>

            :null
            }
            </>
    
        )
        
    }
export default CreateAlarm