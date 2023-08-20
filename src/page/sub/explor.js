
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai";
import CreateExplor from '../../component/CreateExplor';
import {MdOutlineSsidChart, MdOutlineCandlestickChart,MdDeleteForever} from "react-icons/md";
import { FaArrowDownUpAcrossLine,FaLessThanEqual} from "react-icons/fa6";
import { BiArrowToTop,BiArrowToBottom} from "react-icons/bi";
import { TbStatusChange,TbMathFunction} from "react-icons/tb";
import { BsSpeedometer2} from "react-icons/bs";
import { HiOutlineViewfinderCircle} from "react-icons/hi2";
import axios from 'axios';
import { OnRun } from '../../config/OnRun';
import { useOutletContext } from 'react-router';
import { TableTypeLoader } from '../../component/Loader';
import ExplorTable from '../../component/table/ExplorTable';


const Explor = () =>{
    const [popup, setPopup] = useState(false)
    const [Condition, setCondition] = useState([])
    const [phu] = useOutletContext()
    const [status, setStatus] = useState('condition')
    const [dfExplor, setDfExplor] = useState([])
    

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




    const getCondition = () =>{
        axios.post(OnRun+'/user/getcondition',{phu:phu})
        .then(response=>{
            if(response.data.reply){
                setCondition(response.data.df)
            }
            else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
            }
        })
    }

    const handlDeleteCondition = (id) =>{
        axios.post(OnRun+'/user/delcondition',{phu:phu,id:id})
        .then(response=>{
             if (response.data.reply) {
                getCondition()
                toast.success('حذف شد',{position: toast.POSITION.BOTTOM_RIGHT,className: 'posetive-toast'});
             }else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
             }
        })
     }


    useEffect(getCondition,[popup])

    const handleNew = () =>{setPopup(!popup)}

    const handleFind = () =>{
        setStatus('loading')
        axios.post(OnRun+'/user/getexplor',{phu:phu})
        .then(response=>{
            if (response.data.reply) {
                setDfExplor(response.data.df)
                console.log(response.data.df)
                setStatus('explor')
            }else{
                toast.warning(response.data.msg,{position: toast.POSITION.BOTTOM_RIGHT,className: 'negetive-toast'});
                setStatus('condition')
            }
        })
    }

    return(
        <div className="container-page elements">
            <ToastContainer autoClose={3000} />
            <div className='btns'>
                {
                    status!='condition'?
                    <>
                        <div className="create" onClick={()=>setStatus('condition')}>
                            <span><TbMathFunction/></span>
                            <h6>بررسی شروط</h6>
                        </div>
                        {
                            Condition.length>0?
                            <div className="create create2" onClick={handleFind}>
                                <span><HiOutlineViewfinderCircle/></span>
                                <h6>یافتن مجدد</h6>
                            </div>
                            :null
                        }
                    </>
                    :
                    <>
                        <div className="create" onClick={handleNew}>
                            <span><TbMathFunction/></span>
                            <h6>افزودن شرط</h6>
                        </div>
                        {
                            Condition.length>0?
                            <div className="create create2" onClick={handleFind}>
                                <span><HiOutlineViewfinderCircle/></span>
                                <h6>یافتن</h6>
                            </div>
                            :null
                        }
                    </>
                }

            </div>
            <CreateExplor popup={popup} setPopup={setPopup} Condition={Condition} setCondition={setCondition}/>
            <div className='history'>

                {
                    status=='condition'?
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
                                                {
                                                    ['ema','sma','wma','supertrend'].includes(i.indicator)?
                                                    <>
                                                        <div className='picn'>
                                                            <p>{i.indicator} {i.length}</p>
                                                            <span><BsSpeedometer2/></span>                                
                                                        </div>
                                                    </>
                                                    :['rsi','cci'].includes(i.indicator)?
                                                    <>
                                                        <div className='picn'>
                                                            <p>{i.indicator} {i.value}</p>
                                                            <span><BsSpeedometer2/></span>                                
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
                                        <span onClick={()=>handlDeleteCondition(i._id)}><MdDeleteForever/></span>

                                    </div>

                                </div>
                            )
                        })
                    

                    :status=='loading'?
                    <TableTypeLoader row={5} columns={8}/>
                    :<ExplorTable data={dfExplor} status={status}/>
                    

                    
                }


            </div>
        </div>
    )
}

export default Explor