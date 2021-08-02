
import Gameplay from "./components/Gameplay";
import GameContextProvider from "./GameContext";


function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <Gameplay />
      </GameContextProvider>
    </div>
  );
}

export default App;
