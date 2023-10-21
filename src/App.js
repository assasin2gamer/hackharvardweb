import logo from './logo.svg';
import './App.css';
import './index.css';
import React, {useEffect} from "react";
import Granim from "granim";

function App() {


  let blink_counter = 0;
  let space_counter = 0;


  const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

  const wordItems = words.map((word, index) => {
    return <li  key={index}>{word}</li>;
  });

  const category = words.map((word, index) => {
    return <li key={index}>{word}</li>;
  });

  useEffect(() => {
    new Granim({
      element: "#gradient-canvas",
      direction: "left-right",
      opacity: [1,1],
      states: {
        "default-state": {
          gradients: [
            ["#040147", "#085701"],
            ["#b50297", "#b00239"],
            ["#c96100", "#057c87"],
            ["#b00239", "#b50297"],
            ["#057c87", "#c96100"],
            ["#b50297", "#b00239"],
          ],
          transitionSpeed: 5000,
        },
      },
    });
  }, []);




  return (
    <div className="App">
      <canvas id="gradient-canvas"/>
      <div id="gradient-mask"/>

        <div id = "left" style={{ display: 'flex', width: '100%', height: '30%', marginTop: '5%' }}>
          <div style={{ width: '45%', borderStyle: 'solid', marginRight: '5%', marginLeft: '2.5%', height: '30vh', borderColor: 'white', backgroundColor: "rgba(0,0,0,0.5)", borderWidth: '0.3vh', borderRadius: '4vh', height: '80vh'}}>
            
            <div style={{color: "white"}}>
              category
            </div>

            <div style={{color: "white"}}>
              {category}
            </div>

          </div>
        </div>

        <div id = "right">

          <div>
            
            <div id="top" style={{ width: '45%', borderStyle: 'solid', margin: 'auto', height: '30vh', borderColor: 'white', backgroundColor: "rgba(0,0,0,0.5)", borderWidth: '0.3vh', borderRadius: '4vh', position: "relative"}}>
              
              <div style={{color: "white"}}>
                Blink Counter
              </div>

              <div style={{fontSize:'100px', color: "white"}}>
                {blink_counter}
              </div>

              <div style={{ width: '45%', borderStyle: 'solid', margin: 'auto', height: '30vh', borderColor: 'white', backgroundColor: "rgba(0,0,0,0.5)", borderWidth: '0.3vh', borderRadius: '4vh', position: "absolute"}}>
              
                <div style={{color: "white"}}>
                  space_counter
                </div>

                <div style={{fontSize:'100px', color: "white"}}>
                  {space_counter}
                </div>

              </div>
            </div>

          </div>

      </div>
    </div>
  );
}

export default App;