import React from 'react';
import Button from './Button.js';

class TodoAdd extends React.Component {
    constructor(props){
      super(props);
      this.state = {task: ''};
      this.inputRef = React.createRef();
      this.handleChange = this.handleChange.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.onAddTaskClick = this.onAddTaskClick.bind(this);
    }
    componentDidMount(){
      this.inputRef.current.focus();
    }
    handleChange(e) {
      this.setState({task: e.target.value});
    }
    onKeyDown(e) {
      // console.log("Pressed " + e.keyCode);
      if(e.keyCode === 13){
        this.onAddTaskClick();
      }
    }
    onAddTaskClick(){
      const task = this.state.task;
      if(task){
        this.setState({task: ''});
        this.props.onAddTaskClick(task);
      }
      this.inputRef.current.focus();
    }
    render(){
      let task = this.state.task;
      return (
        <div className="TodoAdd">
          <input 
            value={task}
            type="text"
            ref={this.inputRef}
            className="InputField"
            placeholder="Enter Task"
            onChange={this.handleChange}
            onKeyDown={this.onKeyDown}
          />
          <Button
            className="AddTaskButton"
            displayText="Add"
            onClick={this.onAddTaskClick}
          />
        </div>
      )
    }
  }

  export default TodoAdd;