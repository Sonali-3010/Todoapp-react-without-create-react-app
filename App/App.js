import React from 'react';
import './App.css';
import TodoAdd from './TodoAdd.js';
import Todo from './Todo.js';
import ActionBar from './ActionBar.js';

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    let tasks = [];
    if (typeof(Storage) !== "undefined") {
      tasks = JSON.parse(localStorage.getItem("tasksList")) || [];
    }
    this.state = {tasks: tasks};
    this.onAddTaskClick = this.onAddTaskClick.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
    this.handleMarkTodoDone = this.handleMarkTodoDone.bind(this);
    this.handleMarkAllDone = this.handleMarkAllDone.bind(this);
    this.handleDeleteIncomplete = this.handleDeleteIncomplete.bind(this);
    this.handleDeleteCompleted = this.handleDeleteCompleted.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
  }

  onAddTaskClick(addedTask){
    let tasks = this.state.tasks;
    let todo = { task: addedTask, isComplete: false }
    tasks.push(todo);
    this.setState({tasks:tasks});
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  }

  handleMarkTodoDone(todoIndex){
    const tasks = this.state.tasks;
    tasks[todoIndex].isComplete = true;
    this.setState({tasks:tasks});
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  }

  handleTodoDelete(todoIndex){
    const tasks = this.state.tasks.filter((todo, index) => index!==todoIndex);
    this.setState({tasks:tasks});
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  };

  handleMarkAllDone(){
    let tasks = this.state.tasks;
    tasks.forEach((todo) => { todo.isComplete=true; });
    this.setState({tasks:tasks});
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  }

  handleDeleteIncomplete(){
    let tasks = this.state.tasks.filter((todo) => todo.isComplete);
    this.setState({tasks:tasks});
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  }
  
  handleDeleteCompleted(){
    let tasks = this.state.tasks.filter((todo) => !todo.isComplete);
    this.setState({tasks:tasks});
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  }
  
  handleDeleteAll(){
    let tasks = [];
    this.setState({tasks:tasks});
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  }
  
  render(){
    let tasks = this.state.tasks;
    let tasksCollection = tasks.map((todo, index) => (
      <li key={todo.task.toLowerCase().hashCode()}>
        <Todo index={index} todo={todo} onMarkDone={this.handleMarkTodoDone} onDelete={this.handleTodoDelete}/>
      </li>
    ));
    return (
      <div className="TodoApp"><br></br>
        <header className="TodoApp-header">
          <h1>TodoApp</h1>
        </header>
        <TodoAdd onAddTaskClick={this.onAddTaskClick}/>
        <div className="TodoList">
          <ul>
            {tasksCollection}
          </ul>
        </div>
        <ActionBar 
          handleMarkAllDone={this.handleMarkAllDone}
          handleDeleteIncomplete={this.handleDeleteIncomplete} 
          handleDeleteComplete={this.handleDeleteCompleted} 
          handleDeleteAll={this.handleDeleteAll} 
        />
      </div>
    );
  }
}
export default TodoApp;