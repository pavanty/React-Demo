
import './App.css';
import Event_Handling from './components/Event_Handling';
import Greet from './components/Greet';
 import Hello from './components/Hello';
import Message from './components/Message';
import Parentprops from './components/Parentprops';


function App() {
  return (
    <div className="App">
     <Hello> </Hello>
      <Greet name="bruce">
        <p>my name is pavan</p>
      </Greet> 
     <Message></Message>
     <Event_Handling></Event_Handling>
     <Parentprops></Parentprops>
    </div>
  );
}

export default App;
