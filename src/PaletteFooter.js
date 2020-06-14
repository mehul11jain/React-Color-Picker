import React, { Component } from 'react'

function PaletteFooter(props){
        return (
            <footer className="Palette-footer">
                <span>{props.palette.palettename}</span>                
            </footer>
        );
}
export default PaletteFooter;