import Axios from "axios";
import React,{useState} from "react";
import './SignupPage.css'
import S3 from "react-aws-s3";

const SignupPage = () =>{
    const [img ,setImage] = useState({file:null,previewURL:""});
    const [uploadStatus,setUploadStatus] = useState(false);
    const [tempfile,setTempfile] = useState();
    let user = {userId:'',password:'',nickname:'',email:null ,location:null,company:null,introduction:null,imageUrl:""}
    //const [user,setUser] = useState({userId:'',password:'',nickname:'',email:null ,location:null,company:null,introduction:null,imageUrl:""});
    const onClick= ()=>
    {
       console.log(user);
        Axios.post('http://localhost:7000/auth/register',{params:user})
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error));
    }
    const onChange = (e)=>{
        const {id,value} = e.target;
       
        user[id] = value;
    }
    const goToHome=()=>{
        window.location=`/`
    }
    const handleFileOnChange = (event) => {
        event.preventDefault();
        setTempfile(event.target.files[0]);
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
          setImage({
            file : file,
            previewURL : reader.result //file contents 
          })
        
        }
        
        reader.readAsDataURL(file);
     
      }
    
      const ImageClick = async () => {
        let formData = new FormData();
        
        formData.append('file',tempfile);
        console.log(formData.get('file'),tempfile);
        return Axios.post("http://localhost:7000/admin/upload", formData).then(res => {
            console.log(res.data.Location);
            //setUser({...user,imageUrl:res.data.Location})
            user.imageUrl=res.data.Location
            onClick();
          }).catch(err => {
            alert('실패')
          })
        // const config = {
        //     bucketName: process.env.REACT_APP_BUCKET_NAME,
        //     region: process.env.REACT_APP_REGION,
        //     accessKeyId: process.env.REACT_APP_ACCESS_ID,
        //     secretAccessKey: process.env.REACT_APP_ACCESS_KEY,};

        // const ReactS3Client = new S3(config);
        // ReactS3Client.uploadFile(file)
        // 서버의 upload API 호출
       // const res = await axios.post("/api/upload", formData);
        //console.log(res);
      }
      let profile_preview = null;
    if(img.file !== ''){
        
      profile_preview = <img className='profile_preview' src={img.previewURL}></img>
    }
    return(
        
        <div className="registerForm">
          
        <input type='file' 
                accept='image/jpg,image/png,image/jpeg,image/gif' 
                name='profile_img' 
                onChange={handleFileOnChange}>
        </input> 
        {profile_preview}

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
        <button onClick={ImageClick}>홈화면으로</button>
        </div>
    )
}
export default SignupPage;
