import './App.css';
import './index.css';
import React, {useState, useEffect} from "react";
import Granim from "granim";


//nested arrays for the potential charactert
const choices = [
  ["The ", "Be ", "To ", "Of ", "And ", "In ", "That "],
  ["a ", "b ", "c ", "d "],
  ["e ", "f ", "g ", "h "],
  ["i ", "j ", "k ", "l ", "m ", "n "],
  ["o ", "p ", "q ", "r ", "s ", "t "],
  ["u ", "v ", "w ", "x ", "y ", "z "],
  ["! ", "? ", ". ", ", "],
  ["0 ", "1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 "],
  ["backspace"]
]

function App() {
  //initializing core components of our app
  let space_counter = 2;
  let categories;
  let output;
  let firstChoice;

  //initializing blink_Counter to be used with respect to our test button
  const [blink_counter, setBlink] = useState(0);

  //we'll initialize what will appear as our c
  //we'll start with a numbered version of all options
  categories = choices;

  //initialize our output to the output-labelled div
  output = "";

  //some counter to indicate whether we're referring to our first category or the nested character
  //counter = 0 will represent our first category choice
  //counter = 1 will represent which choice in that category we're appending
  let counter = 0;

  //in every [something] time interval, we'll do the following
  //for testing purposes, let [something] be 3 seconds
  function centralTimeLoop(){

    console.log("this means it ran");

    //the code we run in this c
    switch(counter){

      //note that nothing in either case runs when blink_counter = 0
      //this is because we'll use it to gauge how long till a space
      case 0:

        console.log("case = 0");
        //initialize some variable to save what our first category "choice" was
        firstChoice = 0;

        //we change the visual to represent the subarray at choices[blink_counter - 1]
        //that's the category they "chose"
        console.log(blink_counter);
        if(blink_counter > 0 && blink_counter < 9){
          //we choose our category
          categories = choices[blink_counter - 1]

          //the index of our firstChoice is how many blinks we underwent
          firstChoice = blink_counter;
          
          //add 1 to counter to account for the fact that we're now picking our specific subelement
          counter++;

          //reset our blink_counter
          setBlink(0);

          break;
          //capping rapid blinks at the highest category, AKA quit
        } else if (blink_counter >= 9){
          console.log("hey we got to the first conditional!");
          //we backspace of the user chose the last option
          output = output.slice(0,-1);

          //reset our blink_counter
          setBlink(0);

          //for testing
          console.log("backspace");
        }

        break;

      case 1:
        //we'll determine our subelement
        if(blink_counter > 0 && blink_counter < choices[firstChoice].length){
          //we now have our subelement
          //let's append it to our output
          output += choices[firstChoice][blink_counter];

          //reset our blink_counter
          setBlink(0);
          
          //bring counter back to 0
          counter = 0;

          break;
          
          //capping rapid blinks at the highest category, AKA quit
        } else if (blink_counter >= choices[firstChoice].length){
          //we now have our subelement
          //let's append it to our output
          output += choices[firstChoice][choices[firstChoice].length - 1];

          //reset our blink_counter
          setBlink(0);
          
          //bring counter back to 0
          counter = 0;
          
        }
        //let's revert our categories list back to the original form
        categories = choices;
    }
  }
  
useEffect(() => {
    const interval = setInterval(centralTimeLoop, 3000);

    return () => clearInterval(interval);
  }, []); 

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

                <ol class="categories-container">
                    {categories.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>

            </div>
      </div>
          </div>
          
          <div>

            <div style={{ width: '20vh', borderStyle: 'solid', height: '20vh', borderColor: 'white', backgroundColor: "rgba(0,0,0,0.5)", borderWidth: '0.3vh', borderRadius: '4vh', position: "absolute", bottom: "86vh", right: "11vh"}}>
              
              <div style={{color: "white", marginTop: "1.1vh", fontSize: "2vh"}}>
                How many seconds till a space?
                <div style={{fontSize:'100px', color: "white", position: "absolute", top: "4vh", left: "6.2vh"}}>
                  {space_counter}
                </div>
              </div>

          </div>

          </div>
          <div style = {{ width: '20vh', borderStyle: 'solid', height: '20vh', borderColor: 'white', backgroundColor: "rgba(0,0,0,0.5)", borderWidth: '0.3vh', borderRadius: '4vh', position: "absolute", bottom: "86vh", right: "59vh"}}>
            <div style= {{color: "white", marginTop: "1vh"}}>
                Blink Counter
            </div>

            <div style={{fontSize:'100px', color: "white"}}>
                {blink_counter}
                <button style = {{position: "absolute"}} onClick={() => setBlink(++blink_counter)} >Increment</button>

            </div>

          </div>
          <div style={{ width: '90vh', borderStyle: 'solid', height: '65vh', borderColor: 'white', backgroundColor: "rgba(0,0,0,0.5)", borderWidth: '0.3vh', borderRadius: '4vh', float: 'left', position: "absolute", top: "15vh", left: "81.2vh"}}>
              
              <div style={{color: "white", fontSize: "7vh", fontWeight: "2vh"}}>
                Output:
              </div>
              <div style={{color: "white", textAlign: "left", marginLeft: "2vh", marginTop: "2vh"}}>
                {output}
              </div>

          </div>
        </div>
        
  );
}

export default App;