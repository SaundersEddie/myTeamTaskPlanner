
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar-component';
import About from './components/About/About-component';




import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      {/* <Route path="/" exact component={DaysOfList} /> */}
      {/* {<Route path="/edit/:id" component={DaysOfChangeById} /> */}
      {/* <Route path="/create" component={DaysOfCreate} /> */}
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
