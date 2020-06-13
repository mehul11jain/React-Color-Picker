import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "./Palette.css";

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level : 500}
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level){                
        this.setState({level});        
    }
    render(){
        const colorBoxes = this.props.palette.colors[this.state.level].map(color =>(
                <ColorBox background={color.hex} name={color.name } key={color.name}/>
            ))
        return (
          <div className="Palette">
            <NavBar changeLevel={this.changeLevel} level={this.state.level}/>            
            {/* Navbar */}
            <div className="Palette-colors">{colorBoxes}</div>
            {/* footer */}
          </div>
        );
    }
}
export default Palette;