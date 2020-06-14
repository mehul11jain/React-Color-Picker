import React, {Component} from 'react';
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from './SingleColorPalette';
import seedColors from "./seedColors";
import { generatePalette } from "./colorsHelpers";
import {Route,Switch} from 'react-router-dom';
class App extends Component {
  findPalette(id){
    return seedColors.find((palette)=>{
      return palette.id === id
    })
  }
  render(){    
    return (      
      <Switch>
        <Route exact path="/" render={(routeprops) => <PaletteList palettes={seedColors} {...routeprops}/>} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
          )}
        />
        <Route exact path="/palette/:paletteId/:colorId" render={(routeProps)=> <SingleColorPalette palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))} colorid={routeProps.match.params.colorId}/>}/>
      </Switch>
      // <div className = "App" >
      // <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    );
  }
}
export default App;