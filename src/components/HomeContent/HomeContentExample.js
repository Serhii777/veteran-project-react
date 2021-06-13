import React, { useState, useEffect, useReducer } from "react";
import APIHelper from "./APIHelper.js";
import Todo from "./components/Todo";
import "./index.css";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  SET_TODO: "set-todos",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_TODOS: {
      return Object.assign({}, state.todos, {
        todos: action.payload.todos,
      });
    }

    case ACTIONS.ADD_TODO:
      return [...state.todos, newTodo(action.payload.task)];

    case ACTIONS.TOGGLE_TODO:
      return state.todos.map((todo) => {
        if (todo._id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return state.todos.filter((todo) => todo._id !== action.payload.id);
    default:
      return state.todos;
  }
};

const newTodo = (task) => {
  return { _id: Date.now(), task: task, completed: false };
};

export const setTodos = (todos) => {
  return {
    type: ACTIONS.SET_TODOS,
    payload: {
      todos,
    },
  };
};

const App = () => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");

  useEffect(async () => {
    const fetchTodoAndSetTodo = async () => {
      const todos = await APIHelper.getAllTodos();
      return todos;
    };
    const todos = await fetchTodoAndSetTodo();
    //console.log(todos);
    dispatch(setTodos(todos));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { task: task } });
    setTask("");
  };

  return (
    <div>
      {console.log(state.todos)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      {state.todos &&
        state.todos.map((todos) => {
          return <Todo key={todos._id} todo={todos} dispatch={dispatch} />;
        })}
      {/* {//APIHelper.updateTodo(state.todos)} */}
    </div>
  );
};

export default App;
