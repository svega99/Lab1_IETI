import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);

      this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date() },
                            {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
                            {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }], 
                            text:'',              priority: '', dueDate: new Date() };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangePriority = this.handleChangePriority.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
    
    render() {
      const todos = [];
      return (
        <div>
          <h3>TODO</h3>
          
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <br/>
            Text: 
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br/>
            Priority:
            <input
              id="new-todo2"
              onChange={this.handleChangePriority}
              value={this.state.priority}
            />
            <br/>
            <button>
              Add 
            </button>
            
          </form>
          <TodoList todoList={this.state.items}/>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handleChangePriority(e) {
      this.setState({ priority: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,  
        dueDate: this.state.dueDate
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: '',priority:''  
      }));
    }
  }