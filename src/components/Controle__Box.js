import React, { useEffect, useState } from 'react';
import "../assets/controle__box.css"
const Controle__Box = () => {
    const [shadowModel, setShadowModel] = useState({
        x: 0,
        y: 0,
        blur: 0,
        spread: 0,
        color: "#000",
        inset: false
    })
    const updateShadowModeel = (propes, val) => {
        setShadowModel({
            ...shadowModel, [propes]: val
        })

    }
    useEffect(() => {
        console.log(shadowModel)

    }, [shadowModel])
    return (
        <div className="control-box">
            <label >Offset X</label>
            <input type="range" name="" min="-100" max="100" defaultValue="0" id="" onChange={(e) => { updateShadowModeel("x", e.target.value) }} />
            <label >Offset Y</label>
            <input type="range" name="" min="-100" max="100" defaultValue="0" id="" onChange={(e) => { updateShadowModeel("y", e.target.value) }} />
            <label >Blur</label>
            <input type="range" name="" min="0" max="100" defaultValue="0" id="" onChange={(e) => { updateShadowModeel("Blur", e.target.value) }} />
            <label >Spread</label>
            <input type="range" name="" min="0" max="100" defaultValue="0" id="" onChange={(e) => { updateShadowModeel("spread", e.target.value) }} />
            <label >Color</label>
            <input type="color" onChange={(e) => { updateShadowModeel("color", e.target.value) }} />
            <p>
                <span style={{ marginRight: ".5em" }}>Inset:</span>
                <input type="checkbox" name="" id="" onChange={(e) => { updateShadowModeel("inset", !shadowModel.inset) }} />
            </p>
        </div>
    );
};

export default Controle__Box;