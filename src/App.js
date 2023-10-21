import logo from './logo.svg';
import './App.css';

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




  return (
    <div className="App">
      <div style={{ display: 'flex', width: '100%', height: '30%', marginTop: '10%' }}>

        <div style={{ width: '45%', borderStyle: 'solid', marginRight: '5%', marginLeft: '2.5%', height: '30vh' }}>
          <div>
            Blink Counter

          </div>
          <div style={{fontSize:'100px'}}>
            {blink_counter}
          </div>
        </div>
        <div style={{ width: '45%', borderStyle: 'solid', marginRight: '5%', marginLeft: '2.5%', height: '30vh' }}>
          <div>
            space_counter
          </div>
          <div style={{fontSize:'100px'}}>
            {space_counter}
          </div>
        </div>
      </div>


      <div style={{ display: 'flex', width: '100%', height: '30%', marginTop: '5%' }}>
        <div style={{ width: '45%', borderStyle: 'solid', marginRight: '5%', marginLeft: '2.5%', height: '30vh' }}>
          <div>
            category
          </div>
          <div>
            {category}
          </div>
        </div>
        <div style={{ width: '45%', borderStyle: 'solid', marginRight: '5%', marginLeft: '2.5%', height: '30vh' }}>
          <div>
            words
          </div>
          <div>
            {wordItems}
          </div>
        </div>
      </div>

      <div>
      </div>
    </div>
  );
}

export default App;
