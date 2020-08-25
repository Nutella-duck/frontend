import React,{useState,useEffect} from "react";
import ProjectListTemplate from './ProjectListTemplate';
import ProjectForm from './ProjectForm';
import ProjectItemList from './ProjectItemList';
import {useSelector,useDispatch,} from "react-redux";
import axios from 'axios';


import * as Actions from "../../../store/actions";
    const Project=() => {

      const dispatch = useDispatch();
     const  state = useSelector((state) => state.project.projects);
     
     const [inputs,setInputs] = useState({
      projectName:''
      ,description:''
     });
     

        const [users, setUsers] = useState(null);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
      
        const fetchUsers = async () => {
          try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null); 
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
              'http://localhost:7000/admin/project'
            );
            setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
             
           
        
          } catch (e) {
            setError(e);
          }
        
          setLoading(false);
        };
      
        useEffect(() => {
          fetchUsers();
        }, []);
       if (!users) return null;
        const click = () => {
          
          fetchUsers();
          console.log(users.project_name);
          dispatch(Actions.addProject(users.project_name,users.description));
        
        }
        
    

      





      
    /* const onCreate = () => { 
      const len = state.projects.length;
      state.projects.push(len+1);
      dispatch(Actions.addProject(state.input));
    
    };*/

    const {projectName,description} = inputs;
    const handleCreate = () => {
      
      setInputs({
        projectName:'',
        description:''
     
      });
      dispatch(Actions.addProject(inputs.projectName,inputs.description));
    }
    //dispatch(Actions.addProject(inputs));
  
      const  handleChange = (e) => {
         const {name,value} = e.target;
         setInputs({
           ...inputs,
           [name]:value
         });
          };

          
          if (!users) return null;
  
          return (
            <>
            <button onClick={click}>다시 불러오기</button>
            <ProjectListTemplate form={(
              <ProjectForm 
              projectName={projectName}
              description={description}
                onChange={handleChange}
                onCreate={handleCreate}
              />
            )}>
              <ProjectItemList 
              
              projects={state} />
            </ProjectListTemplate>
            </>
          );
        
      }
export default Project;
