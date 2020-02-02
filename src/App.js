import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';


// 14.7 Default Props & Class Components
//make 2 tooltips here and another inside the App directly
const firstToolTip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
);

// 14.7 Default Props & Class Components
const secondToolTip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officis
  </Tooltip>
);

// 14.10 Event Handlers & Conditional Rendering
//array of objects each with a name & content
const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

// 14.10 Event Handlers & Conditional Rendering
//Assignment
const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]
// e.g. <Accordion sections={sections} />


/* Notes: */
// function App()
// - We are "calling" the Split component twice, each time with slightly different arguments for children & className
function App() {
  return (
    <main className='App'>
      <div>
            {/* 14.6 Component Composition */}
            <Split className='left' flexBasis='2'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
              
              {/* 14.7 Default Props & Class Components */} {/* make another tooltip directly inside the App */} {/* {firstToolTip} */}
              <Tooltip message="one more tool tip message">
                {' '}Necessitatibus?
              </Tooltip>
            </Split>

            {/* 14.6 Component Composition */} 
            <Split className='right'> 
              Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.  
            </Split>

            {/* 14.8 Intro to Testing */}
            <Messages name="Messages" unread={0}/>
            <Messages name="Notifications" unread={10}/>
      </div>

      <div>
            {/* 14.9 Setting, Reading, and Updating State */}
            <TheDate />
            <Counter count={123} step={3}/> 

            {/* 14.10 Event Handlers & Conditional Rendering */}
            <Tabs tabs={tabsProp}/>

            {/* 14.10 Assignment: Accordion */}
            <Accordion sections={sectionsProp} />

      </div>


    </main>
  )
}

export default App;





//<Tabs tabs={tabsProp}/>








