import axios from "axios"
import { useEffect, useState } from "react"
import { OnRun } from "../config/OnRun"
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { MdCategory , MdOutlineSsidChart} from "react-icons/md";
import { TbRulerMeasure , TbStatusChange} from "react-icons/tb";
import { IoTodayOutline} from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";






const CreateExplor = (props) =>{

    const [InputUser, setInputUser] = useState({type:'indicator',indicator:'rsi', position:'cross',value:'', lastday:'1',candlestick:'doji'})
    const [phu] = useOutletContext()


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
                                InputUser.type=='اندیکاتور'?
                                <>
                                    <div className="InpIcnLbl">
                                        <p>اندیکاتور</p>
                                        <select value={InputUser.indicator} onChange={(e)=>{setInputUser({...InputUser,indicator:e.target.value})}}>
                                            <option value={'rsi'}>RSI</option>
                                            <option value={'sma'}>SMA (میانگین ساده)</option>
                                            <option value={'ema'}>EMA (میانگین نمایی)</option>
                                            <option value={'wma'}>WMA (میانگین وزنی)</option>
                                            <option value={'cci'}>CCI</option>
                                            <option value={'bb'}>Bollinger Bands</option>
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
                                            :
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
                                            <option value={'Bearish'}>نزولی</option>
                                            <option value={'hummer'}>چکش</option>
                                            <option value={'invertedhammer'}>چکش معکوس</option>
                                            <option value={'star'}>ستاره</option>
                                            <option value={'gravestondoji'}>دوجی سنگ قبر</option>
                                            <option value={'longleggeddoji'}>دوجی پا بلند</option>
                                            <option value={'dragonflydoji'}>دوجی سنجاقک</option>
                                        </select>
                                        <div className="icn">                         
                                            <span><TbStatusChange/></span>
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

                            <button type="submit">ثبت</button>
                            <button  onClick={()=>{props.setPopup(false)}}>لغو</button>
                        </div>
                    </div>
                    <div className="hide" onClick={()=>props.setPopup(false)}></div>
                </>
            :null
            }
        </>
        )
    }
export default CreateExplor