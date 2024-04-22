import { useState } from "react"

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e) {
        setColor(e.target.value)
    }
    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div style={{backgroundColor:color}} className="color-display">
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
            
        </div>
    )
}
export default ColorPicker