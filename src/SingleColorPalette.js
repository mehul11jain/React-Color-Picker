import React, { Component } from 'react';
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import {Link} from "react-router-dom";
import ColorBox from "./ColorBox"
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
        format : "hex"
    }
    this._shades = this.gatherShades(this.props.palette, this.props.colorid);
    this.changeFormat = this.changeFormat.bind(this);   
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const colorBoxes = this._shades.map((color) => {
      return (
        <ColorBox
          key={color.name}
          name={color.name}
          background={color[this.state.format]}
          showLink={false}
        />
      );
    });
    return (
      <div className="Palette SingleColorPalette">
        <NavBar
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}
          showslider={false}
        />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="Back ColorBox">
            <Link to={`/palette/${this.props.palette.id}`} className="Back-btn">Go Back!</Link>
          </div>
        </div>
        <PaletteFooter palette={this.props.palette} />
      </div>
    );
  }
}
export default SingleColorPalette;