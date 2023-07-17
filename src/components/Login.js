import React from 'react'
import "./../assets/css/login.css"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie';
import axios from "axios"
export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const uri = useSelector(state => state.uri)
  const login = () => {
    const url = "https://backend-eexu.onrender.com/login/"
    axios.post(url,
      {
        "username": username,
        "password": password
      }

    ).then((res) => {

      console.log(res)
      const cookies = new Cookies();
      // cookies.set('accesstoken', res.data.access);
      cookies.set('refresh', res.data.refresh);
      cookies.set('access', res.data.access);
      window.location = uri
    }).catch((res) => { console.log(res) })
  }




  return (
    <div className='flexCenter pabsolute lg-cnt'>

      <div className=' flexCenter lg-cn1'>
        <div className='w65 h100'>
          <img src={require('../assets/images/loginlogo.png')} className="imgFull" alt="" />
        </div>
        <div className='w35 flexVC '>
          <div className='lg-bx1 flexVC borderBlack w100'>
            <div className="lg-logo">
              Social Network
            </div>
            <div className='flexVC lg-wd1' >
              <div className='w100 textS'
              >Enter username</div>
              <input type="text " className='w100 lg-in br-rd4'

                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='flexVC lg-wd1'>
              <div className='w100 textS '>Password</div>
              <input type="text " className='w100 lg-in br-rd4'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='lg-btn lg-ft1 br-rd4' onClick={login}>
              Login</button>


          </div>
          <div className='flexCenter lg-bx2 w100 borderBlack'
          >
            Don't have account?

          </div>
        </div>
      </div>


    </div>

  )
}
