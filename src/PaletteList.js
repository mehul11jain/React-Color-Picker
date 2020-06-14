import React, { Component } from 'react'
import MiniPalette from "./MiniPalette";  
import { withStyles } from "@material-ui/core/styles";  
const styles = {
  root: {
    background: "#7F7FD5",  /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: "150vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "70%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "Column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems:"center",
    color: "white",    
    marginBottom: "5%",
    textAlign:"center"    
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};
class PaletteList extends Component {
    goToPalette(id){
      this.props.history.push(`/palette/${id}`);
    }
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
                  <MiniPalette {...p} handleClick={() => this.goToPalette(p.id)}/>
                ))}
              </div>
            </div>
          </div>
        );
    }
}
export default withStyles(styles)(PaletteList);