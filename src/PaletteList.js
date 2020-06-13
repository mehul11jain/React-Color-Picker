import React, { Component } from 'react'
import MiniPalette from "./MiniPalette";  
import { withStyles } from "@material-ui/core/styles";  
import { Link } from 'react-router-dom';
const styles = {
    root :{
        backgroundColor:"blue",
        height:"100%",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center"
    },
    container:{
        width:"50%",
        display:"flex",
        alignItems:"flex-start",
        flexDirection:"Column",
        flexWrap:"wrap",
        border:"1px solid white"
    },
    nav:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        color : "white"        
    },
    palettes:{
        boxSizing : "border-box",
        width : "100%",
        display :"grid",
        gridTemplateColumns :"repeat(3, 30%)",
        gridGap:"5%"
    }
}
class PaletteList extends Component {
    render() {
        const {palettes, classes} = this.props;
        console.log(palettes);  
        return (
          <div className={classes.root}>
            <div className={classes.container}>
              <nav className={classes.nav}>
                <h4>React Colors</h4>
              </nav>
              <div className={classes.palettes}>
                {palettes.map((p) => (
                  <MiniPalette {...p} />
                ))}
              </div>
            </div>
          </div>
        );
    }
}
export default withStyles(styles)(PaletteList);