import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';

//make 2 tooltips here and another inside the App directly
const firstToolTip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
);

const secondToolTip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officis
  </Tooltip>
);

function App() {
  return (
    /* We are "calling" the Split component twice, each time with slightly different arguments for children & className */
    <main className='App'>
      <Split className='left' flexBasis='2'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        {/* make another tooltip directly inside the App */}
        {/* {firstToolTip} */}
        <Tooltip message="one more tool tip message">
          {' '}Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
        
      </Split>
      <Messages name="Messages" unread={0}/>
      <Messages name="Notifications" unread={10}/>
    </main>
  )
}

export default App;














