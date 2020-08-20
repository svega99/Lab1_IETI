import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {


    render() {
        const todoList=this.props.todoList;
        const listItems = todoList.map((item) =>
            <li key={item}>
                <Todo text={item.text} priority={item.priority} dueDate={item.dueDate}/>
            </li>
        );
        return (  
            <ul>
                {listItems}
            </ul>
        );
    }

}