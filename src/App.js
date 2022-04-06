import './App.css';
import Fighter from './Fighter';

const characters = [
  {name: "Akuma", color: 'red'},
  {name: "Bob", color: 'green'},
  {name: "Eddy", color: 'yellow'},
  {name: "Geese", color: 'blue'}
]

function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {characters.map((element) => {
          return (
            <Fighter name={element.name} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
