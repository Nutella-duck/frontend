import Axios from "axios";
import React,{useState} from "react";


const SignupPage = () =>{
    const [user,setUser] = useState({username:'',password:''});
    const onClick= ()=>
    {
        Axios.post('http://localhost:7000/auth/register',{params:user})
        .then((res)=>console.log(res))
        .catch((error)=>console.log('error'));
    }
    const onChange = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }
    return(
        <div>
        <input placeholder="username" name="username"onChange={onChange}></input>
        <input placeholder = "password" name ="password" onChange={onChange}></input>
        <button onClick={onClick}>sign up</button>
        </div>
    )
}
export default SignupPage;
