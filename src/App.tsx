import React from 'react';
import { useMachine } from '@xstate/react';
import { myMachine } from './machines/myFirstMachine';

function App() {
  const [state, send] = useMachine(myMachine);

  const setHouver = () => {
    send('MOUSEOVER')
  }

  const setNotHouver = () => {
    send('MOUSEOUT')
  }

  return (
    <div className="App">
      <h1>App</h1>
      {JSON.stringify(state.value)}
      <button onMouseOver={setHouver} onMouseOut={setNotHouver}>Hover</button>
    </div>
  );
}

export default App;
