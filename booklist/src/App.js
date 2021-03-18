import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookListPage from './BookListPage';

function App() {
  return (
    <div className="App">
        {/* <Router>
          <Switch>
            <Route path='/' component={BookListPage} />
          </Switch>
        </Router> */}
        <BookListPage/>
    </div>
  );
}

export default App;
