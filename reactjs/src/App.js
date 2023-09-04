import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import TabelMahasiswa from './pages/ListMahasiswa';


function App() {
  return (
<Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/mahasiswa">
            <TabelMahasiswa />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
