import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import "./Palette.css";

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level : 500,format : "hex"}
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level){                
        this.setState({level});        
    }
    changeFormat(val){
        this.setState({format : val});
    }
    render(){               
        const colorBoxes = this.props.palette.colors[this.state.level].map(color =>(
                <ColorBox background={color[this.state.format]} name={color.name } key={color.name} paletteid={this.props.palette.id} colorid={color.id} showlink/>
            ))
        return (
          <div className="Palette">
            <NavBar handleChange={this.changeFormat} changeLevel={this.changeLevel} level={this.state.level} showslider={true}/>                        
            <div className="Palette-colors">{colorBoxes}</div>            
            <PaletteFooter palette={this.props.palette}/>
          </div>

        );
    }
}
export default Palette;