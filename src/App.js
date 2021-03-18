import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookListPage from './BookListPage';
import AuthContextProvider from './contexts/AuthContext';
import LoginPage from './LoginPage';

function App() {
  return (
    <div className="App">
      {/* <AuthContextProvider>
        <Router>
          <Switch>
            <Route path='/' component={BookListPage} />
            <Route path='/' component={LoginPage} />
          </Switch>
        </Router>
      </AuthContextProvider> */}
      <BookListPage/>
    </div>
  );
}

export default App;
