import React, { Component } from 'react';
import Slider from "rc-slider";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import "rc-slider/assets/index.css";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { format : "hex"}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({format : e.target.value});
        this.props.handleChange(e.target.value);
    }
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="Brand">
              <a className="navbar-brand" href="#">
                ReactColorPicker
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <div className="slider-container">
                    <span>Level : {this.props.level}</span>
                    <div className="slider">
                      <Slider
                        defaultValue={this.props.level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={this.props.changeLevel}
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <div className="select-container">
                <Select value={this.state.format} onChange={this.handleChange}>
                  <MenuItem value="hex">HEX - #ffffff</MenuItem>
                  <MenuItem value="rgb">rgb - rgb(255,255,255)</MenuItem>
                  <MenuItem value="rgba">rgba - rgba(255,255,255,1)</MenuItem>
                </Select>
              </div>    
            </div>
          </nav>
        );
    }
}
export default NavBar;
