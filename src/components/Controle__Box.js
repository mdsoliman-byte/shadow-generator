import React from 'react';
import "../assets/controle__box.css"
const Controle__Box = () => {
    return (
        <div className="control-box">
            <label >Offset X</label>
            <input type="range" name="" min="-100" max="100" defaultValue="0" id="" />
            <label >Offset Y</label>
            <input type="range" name="" min="-100" max="100" defaultValue="0" id="" />
            <label >Blur</label>
            <input type="range" name="" min="0" max="100" defaultValue="0" id="" />
            <label >Spread</label>
            <input type="range" name="" min="0" max="100" defaultValue="0" id="" />
            <label >Color</label>
            <input type="color" />
            <p>
                <span style={{ marginRight: ".5em" }}>Inset:</span>
                <input type="checkbox" name="" id="" />
            </p>
        </div>
    );
};

export default Controle__Box;