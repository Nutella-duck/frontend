import React, { Component } from 'react';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';
import './App.css';
class Main extends Component {
  id = 4;
  state = {
    toDoList: [
      {
        id: 1,
        text: '러닝 뛰기',
      },
      {
        id: 2,
        text: '공부하기',
      },
      {
        id: 3,
        text: '독서하기',
      },
    ],
    search: '',
  };

  handleCreate = () => {};
  handleUpdate = (id, data) => {};
  handleRemove = (id) => {};
  render() {
    const { toDoList } = this.state;
    return (
      <div>
        <ToDoForm onCreate={this.handleCreate} />
        <ToDoList data={toDoList} onUpdate={this.handleUpdate} onRemove={this.handleRemove} />
      </div>
    );
  }
}

export default Main;