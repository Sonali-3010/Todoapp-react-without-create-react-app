import React from 'react';
import Button from './Button.js';

class Todo extends React.Component{
    constructor(props){
      super(props);

      this.markTodoComplete = this.markTodoComplete.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
    }
    markTodoComplete(){
      this.props.onMarkDone(this.props.index);
    }
    deleteTodo(){
      this.props.onDelete(this.props.index);
    }
    render(){
      let task = this.props.todo.task;
      let isComplete = this.props.todo.isComplete;

      let markDoneButton = <Button 
        className="TodoButton" 
        displayText="Done" 
        onClick={this.markTodoComplete}
      />;

      let deleteButton = <Button 
        className="TodoButton" 
        displayText="Delete" 
        onClick={this.deleteTodo}
      />;

      return (
        <div className="Todo">
          {(isComplete) ? <s>{task}</s> : (task)}
          {(!isComplete && markDoneButton)}
          {deleteButton}
        </div>
      )
    }
  }

  export default Todo;