import BooksListing from './components/books.listing';
import CharactersListing from './components/characters.listing';
import HouseListing from './components/houses.listing';

function App() {
  return (
    <div className="application container mx-auto">
      <div className="m-5">
        <div className="text-xl font-bold">
          Characters
        </div>
        <CharactersListing/>
      </div>

      <div className="m-5">
        <div className="text-xl font-bold">
          Books
        </div>
        <BooksListing/>
      </div>

      <div className="m-5">
        <div className="text-xl font-bold">
          Houses
        </div>
        <HouseListing/>
      </div>

    </div>
  );
}

export default App;
