import './App.css';
import Fighter from './Fighter';
import FighterScreen from './FighterScreen';
import { useState } from 'react'

const characters = [
  {name: "Akuma", color: 'red'},
  {name: "Bob", color: 'green'},
  {name: "Eddy", color: 'yellow'},
  {name: "Geese", color: 'blue'},
  {name: "Jin", color: 'purple'},
  {name: "Kazuya", color: 'pink'},
  {name: "Bryan", color: 'orange'},
  {name: "Gigas", color: 'black'}
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {characters.map((element) => {
          return (
            <Fighter name={element.name} color={element.color} setVisible={setVisible} setSelectedCharacter={setSelectedCharacter}/>
          )
        })}
      </div>
      <FighterScreen isVisible={visible} setVisible={setVisible} selectedCharacter={selectedCharacter} />
    </div>
  );
}

export default App;
