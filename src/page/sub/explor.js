
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai";
import CreateExplor from '../../component/CreateExplor';
import {MdOutlineSsidChart, MdOutlineCandlestickChart,MdDeleteForever} from "react-icons/md";
import { FaArrowDownUpAcrossLine,FaLessThanEqual} from "react-icons/fa6";
import { BiArrowToTop,BiArrowToBottom} from "react-icons/bi";
import { CgArrowsH} from "react-icons/cg";
import { TbStatusChange} from "react-icons/tb";
import { BsSpeedometer2} from "react-icons/bs";
import { HiOutlineViewfinderCircle} from "react-icons/hi2";
import axios from 'axios';
import { OnRun } from '../../config/OnRun';
import { useOutletContext } from 'react-router';




const Explor = () =>{
    const [popup, setPopup] = useState(false)
    const [Condition, setCondition] = useState([])
    const [phu] = useOutletContext()
    

    const replacementMapCandle = {
        "bullish":"صعودی",
        "bearish":"نزولی",
        "hummer":"چکش",
        "invertedhammer":"چکش معکوس",
        "star":"ستاره",
        "gravestondoji":"دوجی سنگ قبر",
        "longleggeddoji":"دوجی پا بلند",
        "dragonflydoji":"دوجی سنجاقک"
      }

    const replacementMapSupRes = {
    "support":"حمایت",
    "resistance":"مقاومت",
    }


    const replacementMapPosition = {
        "greater":"بزرگتر",
        "less":"کوچکتر",
        "cross":"شکست",
    }

    console.log(Condition)

    const handlDeleteCondition = (element) =>{
        setCondition(Condition.filter(i=>i!=element))
    }

    const getCondition = () =>{
        axios.post(OnRun+'/user/getcondition',{phu:phu})
        .then(response=>{
            if(response.data.reply){
                setCondition(response.data.conditions)
            }
            else{

            }
        })
    }

    useEffect(getCondition,[popup])

    const handleNew = () =>{setPopup(!popup)}

    return(
        <div className="container-page elements">
            <ToastContainer autoClose={3000} />
            <div className='btns'>
                <div className="create" onClick={handleNew}>
                    <span><AiOutlinePlus/></span>
                    <h6>افزودن شرط</h6>
                </div>
                {
                    Condition.length>0?
                    <div className="create create2" onClick={handleNew}>
                        <span><HiOutlineViewfinderCircle/></span>
                        <h6>یافتن</h6>
                    </div>
                    :null
                }
            </div>
            <CreateExplor popup={popup} setPopup={setPopup} Condition={Condition} setCondition={setCondition}/>
            <div className='history'>
                {
                    Condition.map(i=>{
                        return(
                            <div key={Math.floor(Math.random()*10000)} className="element-row">
                                {
                                    i.type=="indicator"?
                                        <>
                                            <div className='picn'>
                                                <p>اندیکاتور</p>
                                                <span><MdOutlineSsidChart/></span>
                                            </div>
                                            <div className='picn'>
                                                <p>{i.indicator} {i.value}</p>
                                                <span><BsSpeedometer2/></span>
                                            </div>
                                            {
                                                ['ema','sma','wma','supertrend'].includes(i.indicator)?
                                                <>
                                                    <div className='picn'>
                                                        <p>طول {i.length}</p>
                                                        <span><CgArrowsH/></span>                                
                                                    </div>
                                                </>
                                                :null
                                            }
                                            <div className='picn'>
                                                <p>{(i.position).replace(new RegExp(Object.keys(replacementMapPosition).join("|"), "gi"),matched => replacementMapPosition[matched.toLowerCase()])}</p>
                                                <span><TbStatusChange/></span>
                                            </div>
                                            {
                                                i.position=='cross'?
                                                <div className='picn'>
                                                    <p>{i.lastday} روز اخیر</p>
                                                </div>
                                                :null
                                            }
                                        </>
                                    :i.type=="candlestick"?
                                        <>
                                            <div className='picn'>
                                                <p>الگو شمعی</p>
                                                <span><MdOutlineCandlestickChart/></span>
                                            </div>
                                            <div className='picn'>
                                                <p>{(i.candlestick).replace(new RegExp(Object.keys(replacementMapCandle).join("|"), "gi"),matched => replacementMapCandle[matched.toLowerCase()])}</p>
                                            </div>
                                            <div className='picn'>
                                                <p>{i.lastday} روز اخیر</p>
                                            </div>

                                        </>
                                    :i.type=="supportresistance"?
                                        <>
                                            <div className='picn'>
                                                <p>حمایت مقاومت</p>
                                                <span><FaArrowDownUpAcrossLine/></span>
                                            </div>
                                            <div className='picn'>
                                                <p>{(i.supportresistance).replace(new RegExp(Object.keys(replacementMapSupRes).join("|"), "gi"),matched => replacementMapSupRes[matched.toLowerCase()])}</p>
                                                {
                                                    i.supportresistance=="support"?
                                                    <span><BiArrowToBottom/></span>
                                                    :<span><BiArrowToTop/></span>

                                                }
                                            </div>
                                            <div className='picn'>
                                                <p>{i.distance}%</p>
                                                <span><FaLessThanEqual/></span>
                                            </div>

                                        </>
                                    :null
                                }
                                <div className='AlarmsEdit'>
                                    <span onClick={()=>handlDeleteCondition(i)}><MdDeleteForever/></span>

                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Explor