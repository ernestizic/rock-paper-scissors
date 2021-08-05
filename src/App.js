import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gameplay from "./components/Gameplay";
import Playpage from "./components/Playpage";
import GameContextProvider from "./GameContext";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GameContextProvider>
          <Switch>
            <Route exact path='/'>
              <Gameplay />
            </Route>
            <Route path='/gameplay'>
              <Playpage />
            </Route>
          </Switch>
        </GameContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
