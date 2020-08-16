import React,{Component} from "react";
//import ProjectCard from './ProjectCard';
//import { Card,Button} from "react-bootstrap";
import TeamListTemplate from './TeamListTemplate';
import TeamForm from './TeamForm';
import TeamItemList from './TeamItemList';


    class Team extends Component {

        id = 1 // 이미 0,1,2 가 존재하므로 3으로 설정
      
        state = {
          input: '',
          projects: [
            { id: 0, name:'Nutella Team' },
            {id :1, name :'SoMa Team'},
            {id : 2, name:'Nutella coder'}
           
          ]
        }
      
        
      
        handleCreate = () => {
          const { input, projects } = this.state;
          this.setState({
            input: '', // 인풋 비우고
            // concat 을 사용하여 배열에 추가
            projects: projects.concat({
              id: this.id++,
              name: input
            })
          });
        }
       
        handleChange = (e) => {
            this.setState({
              input: e.target.value // input 의 다음 바뀔 값
            });
          }
    
        render() {
          const { input, projects } = this.state;
          const {
            
            handleCreate,
            handleChange
            
          } = this;
      
          return (
            <TeamListTemplate form={(
              <TeamForm 
                value={input}
                onChange={handleChange}
                onCreate={handleCreate}
              />
            )}>
              <TeamItemList 
              
              projects={projects} />
            </TeamListTemplate>
          );
        }
      }
export default Team;
