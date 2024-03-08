import React, { useState } from 'react';

const UploadImages = (props) => {
    
    const handleFileChange = (e) => {
        props.setImageFile(e.target.files[0])
    }
    return(
        <>
          <div className="w3-card w3-padding w3-round-medium">
          <label htmlFor="fileInput">Upload a Banner</label>
          <br></br>
            <input type="file" id="fileInput" onChange={handleFileChange}/>
          </div>  
        </>
    )
}
export default UploadImages;