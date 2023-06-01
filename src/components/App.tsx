import React from 'react';
import { useMachine } from '@xstate/react';
import { myMachine } from '../machines/myFirstMachine';

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
      <button onMouseOver={setHouver} onMouseOut={setNotHouver}>Hover</button>
      {JSON.stringify(state.value)}
    </div>
  );
}

export default App;
