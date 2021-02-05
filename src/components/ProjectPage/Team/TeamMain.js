import React, { Component } from 'react';

import TeamListTemplate from './TeamListTemplate';
import TeamForm from './TeamForm';
import TeamItemList from './TeamItemList';
import TeamFooter from './TeamFooter';
import '../Run/Run.css';
class Team extends Component {
  id = 3;
  state = {
    input: '',
    projects: [
      { id: 0, name: 'Nutella Team' },
      { id: 1, name: 'SoMa Team' },
      { id: 2, name: 'Nutella coder' },
    ],
  };

  handleCreate = () => {
    const { input, projects } = this.state;
    this.setState({
      input: '',
      projects: projects.concat({
        id: this.id++,
        name: input,
      }),
    });
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    const { input, projects } = this.state;
    const { handleCreate, handleChange } = this;

    return (
     <>
        <TeamListTemplate
          form={
            <TeamForm
              value={input}
              onChange={handleChange}
              onCreate={handleCreate}
            />
          }
        >
          <TeamItemList className ="teamList" projects={projects} />
        </TeamListTemplate>
         <div className="footer">
        <TeamFooter></TeamFooter>
      </div>
      </>
    );
  }
}
export default Team;
