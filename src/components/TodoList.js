import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
const [todos, setTodos] = useState([])

const addTodo = todo => {
    // removes spaces when user spams spaces in input
    if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
    }
    // removes space code is complete

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
}

const updateTodo = (todoId, newValue) => {
     // removes spaces when user spams spaces in input
     if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }
    // removes space code is complete

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
}

const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
}

const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if (todo.id === id) { 
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    });
    setTodos(updatedTodos);
}

  return (
    <div>
        <h1>What's the plan for today</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList