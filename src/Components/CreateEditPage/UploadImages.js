import React, { useState } from 'react';

const UploadImages = (props) => {
    
    const handleFileChange = (e) => {
        props.setImageFile(e.target.files[0])
    }
    return(
        <>
          <div>
            <input type="file" onChange={handleFileChange}/>
          </div>  
        </>
    )
}
export default UploadImages;