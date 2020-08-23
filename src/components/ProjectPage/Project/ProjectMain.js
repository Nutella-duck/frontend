import React from "react";
import ProjectListTemplate from './ProjectListTemplate';
import ProjectForm from './ProjectForm';
import ProjectItemList from './ProjectItemList';
import {useSelector,useDispatch} from "react-redux";


import * as Actions from "../../../store/actions";
    const Project=() => {
      const dispatch = useDispatch();
     const  state = useSelector((state) => state.project.projects);
     
     
     const input = '';
      
    /* const onCreate = () => {
      
      const len = state.projects.length;
      state.projects.push(len+1);
      dispatch(Actions.addProject(state.input));

     
    };*/
    const handleCreate = () => {
      
      dispatch(Actions.addProject(input));
      };
    

  
      const  handleChange = (e) => {
           this.setState({
             input: e.target.value // input 의 다음 바뀔 값
           });
          }
  
          
      
          return (
            <ProjectListTemplate form={(
              <ProjectForm 
                value={input}
                onChange={handleChange}
                onCreate={handleCreate}
              />
            )}>
              <ProjectItemList 
              
              projects={state} />
            </ProjectListTemplate>
          );
        
      }
export default Project;
