import logo from './logo.svg';
import './App.css';
import './index.css';
import React, {useEffect} from "react";
import Granim from "granim";

function App() {


  let blink_counter = 0;
  let space_counter = 0;


  //sample array to test the formatting of text in our div
  const words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

  const wordItems = words.map((word, index) => {
    return <li  key={index}>{word}</li>;
  });

  //sample array to test the formatting of text in our div
  const output = words.map((word, index) => {
    return <li key={index}>{word}</li>;
  });

  //nested arrays for the potential charactert
  const choices = [
    ["The", "Be", "To", "Of", "And", "In", "That"],
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h'],
    ['i', 'j', 'k', 'l', 'm', 'n'],
    ['o', 'p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y', 'z'],
    ['.', '!', '?', ','],
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ["quit"]
  ]

  //we'll initialize what will appear as our c
  //the following is pseudocode for how we want to manipulate this array with respect 
  /*

  */
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
            
            <div style={{color: "white", fontSize: "7vh", fontWeight: "2vh", textAlign: "left", marginLeft: "2vh", marginTop: "2vh"}}>
              Categories:
            </div>

            <div style={{color: "white", fontSize: "3vh", textAlign: "left", marginLeft: "2vh", marginTop: "2vh"}}>
              {output}
            </div>
      </div>
          </div>
          
          <div>

            <div style={{ width: '20vh', borderStyle: 'solid', height: '20vh', borderColor: 'white', backgroundColor: "rgba(0,0,0,0.5)", borderWidth: '0.3vh', borderRadius: '4vh', position: "absolute", bottom: "86vh", right: "11vh"}}>
              
              <div style={{color: "white", marginTop: "1.1vh", fontSize: "2vh"}}>
                How many seconds till a space?
              </div>

              <div style={{fontSize:'100px', color: "white"}}>
                {space_counter}
              </div>

          </div>

          </div>
          <div style = {{ width: '20vh', borderStyle: 'solid', height: '20vh', borderColor: 'white', backgroundColor: "rgba(0,0,0,0.5)", borderWidth: '0.3vh', borderRadius: '4vh', position: "absolute", bottom: "86vh", right: "59vh"}}>
            <div style= {{color: "white", marginTop: "1vh"}}>
                Blink Counter
            </div>

            <div style={{fontSize:'100px', color: "white"}}>
                {blink_counter}
            </div>

          </div>
          <div style={{ width: '90vh', borderStyle: 'solid', height: '65vh', borderColor: 'white', backgroundColor: "rgba(0,0,0,0.5)", borderWidth: '0.3vh', borderRadius: '4vh', float: 'left', position: "absolute", top: "15vh", left: "86vh"}}>
              
              <div style={{color: "white", fontSize: "7vh", fontWeight: "2vh"}}>
                Output:
              </div>

              <div style={{color: "white", textAlign: "left", marginLeft: "2vh", marginTop: "2vh"}}>
                
              </div>

          </div>
        </div>
        
  );
}

export default App;