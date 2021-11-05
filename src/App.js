import React from 'react';
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Navbar} from './components';
import About from './pages/AboutPage/About';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
         <Route path="/About" exact component={About} />
      </Switch>
    </Router>
  )
}

export default App;

