import React, { Component } from 'react';
import Slider from "rc-slider";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import "rc-slider/assets/index.css";
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { format : "hex" ,open : false}
        this.handleformatChange = this.handleformatChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleformatChange(e){
        this.setState({format : e.target.value ,open : true});
        this.props.handleChange(e.target.value);
    }
    handleClose(){
        this.setState({open : false})
    }
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="Brand">
              <Link className="navbar-brand" to="/">
                ReactColorPicker
              </Link>
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
                <Select value={this.state.format} onChange={this.handleformatChange}>
                  <MenuItem value="hex">HEX - #ffffff</MenuItem>
                  <MenuItem value="rgb">rgb - rgb(255,255,255)</MenuItem>
                  <MenuItem value="rgba">rgba - rgba(255,255,255,1)</MenuItem>
                </Select>
              </div>
            </div>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={this.state.open}
              autoHideDuration={3000}
              onClose={this.handleClose}
              message={<span id="message-id">Format Changes to {this.state.format.toUpperCase()}</span>}
              ContentProps={{
                  "aria-describedby" : "message-id" 
              }}
              action={
                <React.Fragment>                  
                  <IconButton
                    size="small"
                    key="close"
                    aria-label="close"
                    color="inherit"
                    onClick={this.handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
          </nav>
        );
    }
}
export default NavBar;
