import Books from './books.jpg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import "./all.css"
import Nav from "./Nav";
import Biotechnology from "./Biotechnology";
import Fiction from "./Fiction";
import Action from "../src/Action";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
          <div className="head">   
           <img className="logo" src={Books} alt="oops" />  <h1>GoodBooks</h1></div>
            
         
      <p>Checkout my favorite books. select a genre to get started.</p>
        
      <Nav />
       <Switch>
         <Route path="/Biotechnology" exact={true}  > <Biotechnology /> </Route>
         <Route path="/Fiction" > <Fiction /> </Route>
         <Route path="/Action"> <Action /> </Route>
      <Route path="*" ><PageNotFound /></Route>

       </Switch>
      </header>
       
    
       
    </div>
  );
}
function PageNotFound(){
  return(
     <div>
       <h1>
         <i>Select genre, Mate !</i>
       </h1>
     </div>
  )
}

export default App;
