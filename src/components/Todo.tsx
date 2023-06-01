import React from 'react';
import { useMachine } from '@xstate/react';
import { todoAppMachine } from '../machines/todoAppMachine';

function Todo() {
  const [state, send] = useMachine(todoAppMachine);

  const setSuccess = () => {
    setTimeout(() => {send("TODOS_LOADED")}, 100);
  }

  const setFail = () => {
    setTimeout(() => {send("LOADING_TODOS_FAILED")}, 100);
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      {JSON.stringify(state.value)}
      <button onClick={setSuccess}>Success</button>
      <button onClick={setFail}>Fail</button>
    </div>
  );
}

export default Todo;
