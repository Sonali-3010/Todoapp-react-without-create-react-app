import React from 'react';
import Button from './Button.js';

class ActionBar extends React.Component {
    constructor(props){
      super(props);
  
      this.onMarkAllDoneClick = this.onMarkAllDoneClick.bind(this);
      this.onDeleteIncompleteClick = this.onDeleteIncompleteClick.bind(this);
      this.onDeleteCompleteClick = this.onDeleteCompleteClick.bind(this);
      this.onDeleteAllClick = this.onDeleteAllClick.bind(this);
    }
    onMarkAllDoneClick()      { this.props.handleMarkAllDone();}
    onDeleteIncompleteClick() { this.props.handleDeleteIncomplete();}
    onDeleteCompleteClick()   { this.props.handleDeleteComplete();}
    onDeleteAllClick()        { this.props.handleDeleteAll();}
    render(){
      return (
        <div className="ActionBar">
        <Button
          className="ActionBarButton"
          displayText="Mark All Tasks Done"
          onClick={this.onMarkAllDoneClick}
        />
        <Button
          className="ActionBarButton"
          displayText="Delete Incomplete Tasks"
          onClick={this.onDeleteIncompleteClick}
        />
        <Button
          className="ActionBarButton"
          displayText="Delete Complete Tasks"
          onClick={this.onDeleteCompleteClick}
        />
        <Button
          className="ActionBarButton"
          displayText="Delete All Tasks"
          onClick={this.onDeleteAllClick}
        />
        </div>
      );
    }
  }
  
  export default ActionBar;