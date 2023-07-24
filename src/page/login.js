
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { OnRun } from '../config/OnRun'
import { useNavigate } from 'react-router-dom'
import { setCookie, getCookie } from '../function/cookie'
import { FiPhone } from "react-icons/fi";
import { IoReloadSharp } from "react-icons/io5";
const Login = () => {
    const [UserInput, setUserInput] = useState({ 'phone': '', 'captcha': '', 'code': '' })
    const [CaptchaCode, setCaptchaCode] = useState(null)
    const [CaptchaImg, setCaptchaImg] = useState(null)
    const [Code, setCode] = useState('')
    const [status, setStatus] = useState(true)
    const Navigate = useNavigate()
    const cookie = getCookie('phu')

    const checkUser = () => {
        axios.post(OnRun + '/user/atuh', { cookie: cookie })
        .then(response => {

            if (response.data.reply) {

                Navigate('/dashboard')
            }
            else {

            }


        }
        )
    }



    const getCaptcha = () => {
        axios({
            method: 'POST', url: OnRun + '/user/usercaptcha'
        }).then(response => {


            setCaptchaCode(response.data.captcha)
            setCaptchaImg(response.data.img)
        })
    }

    const applyphone = () => {
        if (UserInput.captcha == '') {
            alert('کد تصویر صحیح نیست')
        } else if (UserInput.phone.length !== 11) {
            alert('مقدار شماره همراه را به صورت صحیح وارد کنید')
        } else {
            axios.post(OnRun + '/user/applyphone', { UserInput: UserInput, CaptchaCode: CaptchaCode })
                .then(response => {
                    if (response.data.reply) {
                        setStatus(false)
                    }
                })
        }
    }

    const handleCode = () => {
        axios.post(OnRun + '/user/coderegistered', { UserInput: UserInput })
            .then(response => {
                if (response.data.reply) {
                    setCookie('phu', response.data.phu, 1)
                    Navigate('/dashboard')
                }

            })




    }



    useEffect(getCaptcha, [])
    useEffect(checkUser, [])

    return (

        <div className="user-login">
            <header>
                <div className='logos'>
                    <img className='circle' src={process.env.PUBLIC_URL + '/img/circle.svg'}></img>
                    <div className='logoConteiner'>
                        <img className='logoAbsolote' src={process.env.PUBLIC_URL + '/img/logo.svg'}></img>
                        <img src={process.env.PUBLIC_URL + '/img/subLogo.svg'}></img>
                    </div>

                </div>

            </header>

            <div className="login">

                <div className='rowBrand'>
                    <img src={process.env.PUBLIC_URL + '/img/logoMini.svg'}></img>
                    <h1>رُنــد تِـریــد</h1>
                    <h6>دستیار معاملاتی</h6>
                </div>
                <div className='FormContiner'>

                    <h5>ورود به حساب کاربری</h5>
                    {status ?
                        <>
                            <div className='InpIcn'>
                                <input value={UserInput.phone} onChange={(e) => setUserInput({ ...UserInput, phone: e.target.value })} placeholder='شماره همراه خود را وارد کنید' type='number' />
                                <div className='icn'>
                                    <span><FiPhone /></span>
                                </div>
                            </div>

                            <div className='InpCpt'>
                                <div className='ic'>
                                    <input value={UserInput.captcha} onChange={(e) => setUserInput({ ...UserInput, captcha: e.target.value })} placeholder='کد تصویر' type='text' />
                                    {CaptchaImg == null ? null : <img onClick={getCaptcha} src={`data:image/png;base64,${CaptchaImg}`}></img>}
                                </div>
                                <div className='icn' onClick={getCaptcha}>
                                    <span><IoReloadSharp /></span>
                                </div>
                            </div>
                            <button className='ent' onClick={applyphone}>تایید</button>
                        </>
                        :
                        <>
                            <div className='InpIcn'>
                                <input value={UserInput.code} onChange={(e) => { setUserInput({ ...UserInput, code: e.target.value }) }} placeholder='کد تایید' />
                                <div className='icn'>
                                    <span><FiPhone /></span>
                                </div>
                            </div>
                            <button className='ent' onClick={handleCode}>ورود</button>
                        </>
                    }


                </div>




            </div>



        </div>



    )
}
export default Login