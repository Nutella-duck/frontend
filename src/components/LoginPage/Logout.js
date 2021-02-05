import Axios from "axios";
import React,{useState} from "react";
import './SignupPage.css'

const Logout = () =>{
    const [user,setUser] = useState({userId:'',password:'',nickname:'',email:null ,location:null,company:null,introduction:null});
    const onClick= ()=>
    {
        console.log(user)
        Axios.post('http://localhost:7000/auth/logout',{params:user})
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error));
    }
    const onChange = (e)=>{
        const {id,value} = e.target;
       
        setUser({...user,[id]:value});
    }
    const goToHome=()=>{
        window.location=`/`
    }
    return(
        
        <div className="registerForm">
            

        <button onClick={onClick}>Logout</button>
       
        </div>
    )
}
export default Logout;
