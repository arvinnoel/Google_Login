import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
import './Header.css'
const Header = () => {
    const [userdata, setUserdata] = useState({});
    console.log("response", userdata)

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:6005/login/success", {withCredentials:true});
            setUserdata(response.data.user)
        } catch (error) {
            console.log("error",error)
        }
    }

    const logout = () =>{
        window.open("http://localhost:6005/logout", "_self")
    }
    useEffect(() =>{
        getUser()
    }, [])
  return (
    <div>
      <header>
        <div className='left'>
            <h1>Arvin</h1>
        </div>
        <div className='right'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {
                    Object?.keys(userdata)?.length >0 ?(
                        <>
                        <li style={{ color: 'black', fontweight:"bold"}}>{userdata?.displayName}</li>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li onClick={logout}>Logout</li>
                        <li>
                            <img src={userdata?.image} style={{width:"50px", borderRadius:"50%"}} alt=""/>
                        </li>
                        </>
                    ):<li>
                        <NavLink to="/login">Sign in</NavLink>
                    </li>
                }
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
