import React, {Component} from 'react';
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorsHelpers";
import {Route,Switch} from 'react-router-dom';
class App extends Component {
  render(){
    console.log(generatePalette(seedColors[4]));
    return (       
      <Switch>
        <Route exact path="/"  render={()=><h1>Palette List Here</h1>} />
        <Route exact path="/palette/:id" render={()=><h1>Individual palette</h1>}/>
      </Switch>
      // <div className = "App" >  
        // <Palette palette={generatePalette(seedColors[4])}/>
      // </div>

    );
  }
}
export default App;