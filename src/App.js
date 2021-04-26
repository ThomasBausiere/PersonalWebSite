import About from "./pages/About";
// import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Parcours from "./pages/parcours";
// import Recherches from "./pages/Recherches";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Projets from "./pages/Projets";







function App() {
  return (
    
    <div className="App">
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" exact component={About}/>
    <Route path="/parcours" exact component={Parcours}/>
    <Route path="/projets" exact component={Projets}/>
    <Route component={NotFound}/>
   </Switch>
  </BrowserRouter>
  
    

    </div>
  );
}









export default App;

