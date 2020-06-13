import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class PaletteList extends Component {
    render() {
        const {palettes} = this.props;
        console.log(palettes);
        return (
            <div className="PaletteList">
                {palettes.map(p=>(
                    <p><Link to={`/palette/${p.id}`}>{p.paletteName}</Link></p>
                ))}
            </div>
        )
    }
}
export default PaletteList;