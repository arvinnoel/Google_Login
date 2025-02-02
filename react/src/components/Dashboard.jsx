import React, {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const navigate = useNavigate();
    const getUser = async () =>{
        try {
            const response = await axios.get("http://localhost:6005/login/success", {withCredentials:true});
            console.log("response", response)
        } catch (error) {
            navigate("*")
        }
    }
    useEffect(() =>{
        getUser()
    }, [])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
