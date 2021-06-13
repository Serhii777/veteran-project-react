import React from "react";

import * as constants from '../../../services/constants'

import styles from "./PsychologicalHelp.module.css";

const initialState = [...constants.TODOS];
// const initialState = [
//   {id: 1, name: 'Get started', complete: false}
// ];



const PsychologicalHelp = () => {
  return (
    <div className={styles.psychologicalHelp}>
      <h2>Hello from PsychologicalHelp</h2>

      <div className="todo-input">
        <form>
          <input type="search" id="add-todo" placeholder="Add Todo..." />
        </form>
      </div>
      <div className="column-container">
        {initialState.map((todo) => (
          <div key={todo.id} alt={todo.id} className="column-item">
            <div className="flex-container">
              <div className="todo-name">{todo.name}</div>
              <div className="todo-delete">&times;</div>
            </div>
          </div>
        ))}
      </div>
      <button>
        CLEAR TODOS
      </button>



      
    </div>
  );
};

export default PsychologicalHelp;