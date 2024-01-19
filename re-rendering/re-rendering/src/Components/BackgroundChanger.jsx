import React, { useState } from "react";

const BackgroundChanger = () =>{
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    }

    return (
        <div className="background_changer" style={{ backgroundColor: selectedColor }}>
            <h2>Background Changer</h2>
            <label htmlFor="colorPicker"> Choose a Background Color: </label>
            <input
               type = "color"
               id = "colorPicker"
               value = {selectedColor}
               onChange={handleColorChange}

            />
        </div>
    );
};

export default BackgroundChanger;
