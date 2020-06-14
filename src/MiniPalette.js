import React from 'react'
import { withStyles } from "@material-ui/core/styles";

const styles ={
    root : {
        background: "white",
        border : "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover" :{
            cursor : "pointer",            
        }
    },
    colors : {
        backgroundColor:"white",
        height : "150px",
        width : "100%"
    },
    title : {
        display : "flex",
        justifyContent : "space-around",
        alignItems : "center",
        margin : "0",
        color : "black",
        paddingTop : "0.5rem",
        fontSize : "1rem",
        position : "relative"
    },
    emoji:{
        marginLeft:"0.5rem",
        fontSize:"1.5rem"

    },
    miniColor:{
        display:"inline-block",
        height :"25%",
        width:"20%",
        margin:"0 auto",
        position :"relative",
        marginBottom :"-5.5px"        
    }
};
function MiniPalette(props){
    const {classes,paletteName,emoji,colors} = props;  
    const miniColorBoxes = colors.map(color =>(
        <div className={classes.miniColor} style={{backgroundColor : color.color }} key={color.name}></div>
    ))  
    return(
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}
export default withStyles(styles)(MiniPalette);
