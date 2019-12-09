import React, {useState} from 'react';
import ReactGA from 'react-ga';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/registerForm";


ReactGA.initialize('UA-152383455-1');
ReactGA.pageview('/');


function App() {
  return (
    <div className="App">
      <Splash/>
    </div>
  );
}




function Splash(){

  const[text, setText] = useState(false);
  const[choice, setChoice] = useState(" ");
  let b1 = "Go Alone";
  let b2 = "Find a Buddy";



  function handleClick(choice){
    setText(true);
    if (choice === b1){
      ReactGA.event({
        category: "Alone Button Clicked",
        action: "User pressed the alone button",
      });

    }else if (choice === b2){
      ReactGA.event({
        category: "Buddy Button Clicked",
        action: "User pressed the buddy button",
      });
    }

  }

  if(text){
    return(
      <div className="outer">
        <div className="fixed one">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Register></Register>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{



    return (
        <div className="outer">
          <div class="header">
          </div>
          <div class="fixed one">
            <div className="logo-area">
              <img className="logo-img" src="https://bit.ly/2Ry81yw"/>
            </div>
            <div className="landing-text">
              <p>An online community created by NYU Shanghai students for NYU Shanghai students to collaborate through the exchange of ideas, skills, and viewpoints.</p>
              <h3>What is your choice?</h3>
            </div>
            <div className="container">
              <div className="sad" onClick={() => handleClick(b1)}><h3>Learn a Skill</h3></div>
              <div className="happy" onClick={() => handleClick(b2)}><h3>Teach a Skill</h3></div>
            </div>
          </div>
          <div class="scroll">
            <h3>
              Feeling down and crummy?
            </h3>
            <h3>
              Well join our growing community and find your buddy!
            </h3>
          </div>
          <div class="fixed two"></div>
          <div class="scroll">
            <h3>
              Are you overwhelemed with all the different apps and websites for events?
            </h3>
            <h3>
              Buddie is the all-in-one solution for you!
            </h3>
          </div>
          <div class="fixed three">
            <h3>
              Join us today!
            </h3>
          </div>
        </div>
    );
  }
}

export default App;
