// import Ivar from './ivar.jpg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import "./all.css"
import Nav from "./Nav";
import Business from "./Business";
import Fiction from "./Fiction";
import JavaScript from "./JavaScript";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
          <div className="head">   
             <h1>favourite Webseries</h1></div>
            
         
      <p>Checkout my favorite Webseries. select a genre to get started.</p>
        
      <Nav />
       <Switch>
         <Route path="/Business" exact={true}  > <Business /> </Route>
         <Route path="/Fiction" > <Fiction /> </Route>
         <Route path="/JavaScript"> <JavaScript /> </Route>
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
