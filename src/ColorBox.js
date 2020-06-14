import React, { Component } from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.css";
class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state ={copied : false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({copied : true},()=>{
            setTimeout(() => this.setState({copied : false}),1000);
        });
        console.log(this.state) 
    }
    render() {
        const {name,background} = this.props;
        const copied = this.state.copied;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <div style={{background}} className="ColorBox">
                <div style={{background }} className={`Overlay ${copied && "show"}`} />
                <div className={`copy-msg ${copied && "show"}`}>
                    <h2>Copied!</h2>
                    <p>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="Copy-btn">Copy</button>
                </div>
                {this.props.showlink && <Link to={`/palette/${this.props.paletteid}/${this.props.colorid}`} onClick={e => e.stopPropagation()}>
                    <span className="see-more">More</span>
                </Link>}
            </div>
            </CopyToClipboard>
        )
    }
}
export default ColorBox;
