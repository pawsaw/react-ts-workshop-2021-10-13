import { Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { BooksScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';
import { BookDetailsScreen } from './screens/BookDetailsScreen';


function App() {

  
return (
    <>
      <h1>Book Manager</h1>
      <ul>
        <li><Link to="/playground">Playground</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
      <div>
        <Switch>
          <Redirect exact path="/" to="/books" />
          <Route path="/playground">
            <PlaygroundScreen />
          </Route>
          <Route path="/books/:isbn">
            <BookDetailsScreen />
          </Route>
          <Route path="/books">
            <BooksScreen />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
