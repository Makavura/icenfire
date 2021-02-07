import BooksListing from './components/books.listing';
import CharactersListing from './components/characters.listing';
import HouseListing from './components/houses.listing';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./components/not.found";
import Character from './components/character';
import House from './components/house';
import Book from './components/book';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="application container mx-auto">
            <div className="m-5">
              <div className="text-xl font-bold">
                Characters        </div>
              <CharactersListing />
            </div>

            <div className="m-5">
              <div className="text-xl font-bold">
                Books        </div>
              <BooksListing />
            </div>

            <div className="m-5">
              <div className="text-xl font-bold">
                Houses        </div>
              <HouseListing />
            </div>
          </div>
        </Route>
        <Route exact path="/character/:index" children={<Character/>}>
        </Route>
        <Route exact path="/house/:index" children={<House/>}>
        </Route>
        <Route exact path="/book/:index" children={<Book/>}>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>



  );
}

export default App;
