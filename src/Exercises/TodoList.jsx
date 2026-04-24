import { useState } from "react";

function TodoList () {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Learn React', completed: false},
        {id: 2, text: 'Complete Project setup', completed: false}
    ]);

    const [inputValue, setInputValue] = useState ('');

    const addTodo = () => {
        if (!inputValue.trim()) return;

        setTodos([
            ...todos,
            { id: Date.now(), text: inputValue, completed: false}
        ]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id
            ? {...todo, completed : !todo.completed}
            :todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id ));
    };

    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo}
            />

            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map(todo => 
                    <li key={todo.id}>
                        <span 
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                        onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>

                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TodoList;