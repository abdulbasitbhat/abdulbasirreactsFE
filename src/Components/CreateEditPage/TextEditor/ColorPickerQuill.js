import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const ColorPickerQuill = ({quillRef}) => {
  const [color, setColor] = useState('#000000');

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };

  const handleApplyColor = () => {
    const selection = quillRef.current.getEditor().getSelection();
    if (selection) {
      quillRef.current.getEditor().format('color', color);
    }
  };
  useEffect(()=>{
    handleApplyColor()
  },[color])

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="color"
        value={color}
        onChange={handleChangeColor}
        style={{height:'1vh',aspectRatio:1}}
      />
      {/* <button onClick={handleApplyColor}>Set</button> */}
    </div>
  );
};

export default ColorPickerQuill;