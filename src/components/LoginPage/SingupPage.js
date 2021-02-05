import Axios from "axios";
import React,{useState} from "react";
import './SignupPage.css'

const SignupPage = () =>{
    const [user,setUser] = useState({userId:'',password:'',nickname:'',email:null ,location:null,company:null,introduction:null});
    const onClick= ()=>
    {
        console.log(user)
        Axios.post('http://localhost:7000/auth/register',{params:user})
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
            <div className="input">
                <div >ID : </div>
                <input placeholder="username" id="userId"onChange={onChange}></input>
            </div>
            <div className="input">
                <div >password : </div>
                <input placeholder="password" id="password"onChange={onChange}></input>
            </div><div className="input">
                <div >nickname : </div>
                <input placeholder="nickname" id="nickname"onChange={onChange}></input>
            </div><div className="input">
                <div >email : </div>
                <input placeholder="email" id="email"onChange={onChange}></input>
            </div><div className="input">
                <div >location : </div>
                <input placeholder="location" id="location"onChange={onChange}></input>
            </div><div className="input">
                <div >company : </div>
                <input placeholder="company" id="company"onChange={onChange}></input>
            </div><div className="input">
                <div >intoduction : </div>
                <input placeholder="intoduction" id="intoduction"onChange={onChange}></input>
            </div>

        <button onClick={onClick}>sign up</button>
        <button onClick={goToHome}>홈화면으로</button>
        </div>
    )
}
export default SignupPage;
