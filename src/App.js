import React, {useState} from 'react';
import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';



function initializeReactGA() {
  ReactGA.initialize('UA-152383455-1');
  ReactGA.pageview('/');
}

function App() {
  return (
    <div className="App">
      <Splash/>
    </div>
  );
}




function Splash(){

  const[text, setText] = useState(false);
  const[choice, setChoice] = useState(false);
  let b1 = "Go Alone";
  let b2 = "Find a Buddy";



  function handleClick(choice){
    setText(true);
    if (choice === b1){
      ReactGA.event({
        category: " Alone Button Clicked",
        action: "User pressed the alone button",
      });
    }else if (choice === b2){
      ReactGA.event({
        category: " Buddy Button Clicked",
        action: "User pressed the buddy button",
      });
    }
    
  }

  if(text){
    return(
      <div className="outer">
        <div className="container">
          <p>Thank you for the feedback</p>
        </div>
      </div>
    );
  }
  else{

  

    return (
        <div className="outer">
          <p>What is your choice?</p>
          <div className="container">
            <div className="sad" onClick={() => handleClick(b1)}><p>Go Alone</p></div>
            <div className="happy" onClick={() => handleClick(b2)}><p>Find a Buddy</p></div>
          </div>
          <p>{text}</p>
        </div>
    );
  }
}

export default App;
