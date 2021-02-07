import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/not.found";
import Character from './components/character';
import House from './components/house';
import Book from './components/book';
import Application from './components/application';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/icenfire">
          <div className="application container mx-auto">
            <Application />
          </div>
        </Route>
        <Route exact path="/character/:index" children={<Character />}>
        </Route>
        <Route exact path="/house/:index" children={<House />}>
        </Route>
        <Route exact path="/book/:index" children={<Book />}>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
