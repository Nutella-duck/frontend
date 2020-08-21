import React from "react";
//import ProjectCard from './ProjectCard';
//import { Card,Button} from "react-bootstrap";
import ProjectListTemplate from './ProjectListTemplate';
import ProjectForm from './ProjectForm';
import ProjectItemList from './ProjectItemList';
import {useSelector,useDispatch} from "react-redux";


import * as Actions from "../../../store/actions";
    const Project=() => {
      const dispatch = useDispatch();
     const  state = useSelector((state) => state.project);
     
     
     
      
    /* const onCreate = () => {
      
      const len = state.projects.length;
      state.projects.push(len+1);
      dispatch(Actions.addProject(state.input));

     
    };*/
  
       const  handleChange = (e) => {
            this.setState({
              input: e.target.value // input 의 다음 바뀔 값
            });
          }
         
      const onCreate = (input)=>{
        return;
      } 
          
      
          return (
            <ProjectListTemplate form={(
              <ProjectForm 
                value={state.input}
                onChange={handleChange}
                onCreate={onCreate(state.input)}
              />
            )}>
              <ProjectItemList 
              
              projects={state.projects} />
            </ProjectListTemplate>
          );
        
      }
export default Project;
