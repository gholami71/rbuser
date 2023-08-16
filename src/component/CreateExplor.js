import axios from "axios"
import { useEffect, useState } from "react"
import { OnRun } from "../config/OnRun"
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { MdCategory , MdOutlineSsidChart,MdOutlineCandlestickChart} from "react-icons/md";
import { CgArrowsH} from "react-icons/cg";
import { FaArrowDownUpAcrossLine} from "react-icons/fa6";
import { TbRulerMeasure , TbStatusChange} from "react-icons/tb";
import { IoTodayOutline} from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";






const CreateExplor = (props) =>{

    const [InputUser, setInputUser] = useState({type:'indicator',indicator:'rsi', position:'cross',length:20,value:'50', lastday:'1',candlestick:'hummer',supportresistance:'support',distance:'5'})
    const [phu] = useOutletContext()


    const addCondition = () =>{
        
            axios.post(OnRun+'/user/setcondition',{phu:phu,data:InputUser})
            .then(response=>{
                if (response.data.reply){
                toast.success('شرط با موفقیت ثبت شد', {position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'})
            }
            
            else{
               toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
        })
            props.setPopup(false)
        
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

                            <div className="InpIcnLbl">
                                <p>نوع</p>
                                <select value={InputUser.type} onChange={(e)=>{setInputUser({...InputUser,type:e.target.value})}}>
                                    <option value={'indicator'}>اندیکاتور</option>
                                    <option value={'candlestick'}>الگو های شمعی</option>
                                    <option value={'supportresistance'}>حمایت و مقاومت</option>
                                </select>
                                <div className="icn">                         
                                    <span><MdCategory/></span>
                                </div>
                            </div>
                            
                            {
                                /*اندیکارتور ها */
                                InputUser.type=='indicator'?
                                <>
                                    <div className="InpIcnLbl">
                                        <p>اندیکاتور</p>
                                        <select value={InputUser.indicator} onChange={(e)=>{setInputUser({...InputUser,indicator:e.target.value})}}>
                                            <option value={'rsi'}>RSI</option>
                                            <option value={'sma'}>SMA (میانگین ساده)</option>
                                            <option value={'ema'}>EMA (میانگین نمایی)</option>
                                            <option value={'wma'}>WMA (میانگین وزنی)</option>
                                            <option value={'cci'}>CCI</option>
                                            <option value={'supertrend'}>Supertrend</option>
                                        </select>
                                        <div className="icn">                         
                                            <span><MdOutlineSsidChart/></span>
                                        </div>
                                    </div>
                                    {
                                        ['rsi','cci','ema','sma','wma','supertrend'].includes(InputUser.indicator)?
                                        <>
                                        {
                                            ['rsi','cci'].includes(InputUser.indicator)?
                                            <div className="InpIcnLbl">
                                                <p>موقعیت</p>
                                                <select value={InputUser.position} onChange={(e)=>{setInputUser({...InputUser,position:e.target.value})}}>
                                                    <option value={'greater'}>بزرگتر</option>
                                                    <option value={'less'}>کوچکتر</option>
                                                    <option value={'cross'}>شکست (cross)</option>
                                                </select>
                                                <div className="icn">                         
                                                    <span><TbStatusChange/></span>
                                                </div>
                                            </div>
                                            :['ema','sma','wma','supertrend'].includes(InputUser.indicator)?
                                            <>
                                                <div className="InpIcnLbl">
                                                    <p>طول</p>
                                                    <input value={InputUser.length} onChange={(e)=>{setInputUser({...InputUser,length:e.target.value})}}/>
                                                    <div className="icn">                         
                                                        <span><CgArrowsH/></span>
                                                    </div>
                                                </div>
                                                <div className="InpIcnLbl">
                                                    <p>موقعیت</p>
                                                    <select value={InputUser.position} onChange={(e)=>{setInputUser({...InputUser,position:e.target.value})}}>
                                                        <option value={'greater'}>بزرگتر قیمت</option>
                                                        <option value={'less'}>کوچکتر قیمت</option>
                                                        <option value={'cross'}>شکست قیمت (cross)</option>
                                                    </select>
                                                    <div className="icn">                         
                                                        <span><TbStatusChange/></span>
                                                    </div>
                                                </div>
                                            </>
                                            :null

                                        }


                                        {
                                            ['rsi','cci'].includes(InputUser.indicator)?
                                            <>
                                                <div className="InpIcnLbl">
                                                    <p>مقدار</p>
                                                    <input value={InputUser.value} onChange={(e)=>{setInputUser({...InputUser,value:e.target.value})}}/>
                                                    <div className="icn">                         
                                                        <span><TbRulerMeasure/></span>
                                                    </div>
                                                </div>
                                            </>
                                            :null
                                        }
                                        {
                                            ['cross'].includes(InputUser.position)?
                                            <>
                                                <div className="InpIcnLbl">
                                                    <p>روز اخیر</p>
                                                    <input value={InputUser.lastday} onChange={(e)=>{setInputUser({...InputUser,lastday:e.target.value})}}/>
                                                    <div className="icn">                         
                                                        <span><IoTodayOutline/></span>
                                                    </div>
                                                </div>
                                            </>
                                            :null
                                        }
                                        </>
                                        :null
                                    }
                                </>
                                :null
                            }
                            {
                                InputUser.type=='candlestick'?
                                <>
                                    <div className="InpIcnLbl">
                                        <p>الگو</p>
                                        <select value={InputUser.candlestick} onChange={(e)=>{setInputUser({...InputUser,candlestick:e.target.value})}}>
                                            <option value={'bullish'}>صعودی</option>
                                            <option value={'bearish'}>نزولی</option>
                                            <option value={'hummer'}>چکش</option>
                                            <option value={'invertedhammer'}>چکش معکوس</option>
                                            <option value={'star'}>ستاره</option>
                                            <option value={'gravestondoji'}>دوجی سنگ قبر</option>
                                            <option value={'longleggeddoji'}>دوجی پا بلند</option>
                                            <option value={'dragonflydoji'}>دوجی سنجاقک</option>
                                        </select>
                                        <div className="icn">                         
                                            <span><MdOutlineCandlestickChart/></span>
                                        </div>
                                    </div>
                                    <div className="InpIcnLbl">
                                        <p>روز اخیر</p>
                                        <input value={InputUser.lastday} onChange={(e)=>{setInputUser({...InputUser,lastday:e.target.value})}}/>
                                        <div className="icn">                         
                                            <span><IoTodayOutline/></span>
                                        </div>
                                    </div>
                                </>
                                :null
                            }
                            {
                                InputUser.type=='supportresistance'?
                                <>
                                    <div className="InpIcnLbl">
                                        <p>موقعیت</p>
                                        <select value={InputUser.supportresistance} onChange={(e)=>{setInputUser({...InputUser,supportresistance:e.target.value})}}>
                                            <option value={'support'}>حمایت</option>
                                            <option value={'resistance'}>مقاومت</option>
                                        </select>
                                        <div className="icn">                         
                                            <span><TbStatusChange/></span>
                                        </div>
                                    </div>
                                    <div className="InpIcnLbl">
                                        <p>فاصله</p>
                                        <select value={InputUser.distance} onChange={(e)=>{setInputUser({...InputUser,distance:e.target.value})}}>
                                            <option value={'5'}>کمتر از 5% با قیمت</option>
                                            <option value={'10'}>کمتر از 10% با قیمت</option>
                                            <option value={'20'}>کمتر از 20% با قیمت</option>
                                            <option value={'30'}>کمتر از 30% با قیمت</option>
                                        </select>
                                        <div className="icn">                         
                                            <span><FaArrowDownUpAcrossLine/></span>
                                        </div>
                                    </div>
                                </>
                                :null
                            }

                        </div>
                        <button onClick={addCondition} type="submit">افزودن</button>
                        <button  onClick={()=>{props.setPopup(false)}}>لغو</button>
                    </div>
                    <div className="hide" onClick={()=>props.setPopup(false)}></div>
                </>
            :null
            }
        </>
        )
    }
export default CreateExplor