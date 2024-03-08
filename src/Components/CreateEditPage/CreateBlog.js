import React,{useEffect, useState} from 'react';
import TextEditorQuill from './TextEditor/TextEditorQuill';
import DisplayTextQuill from './TextEditor/DisplayTextQuill';
import './TextEditor/fontStyles.css'
import UploadImages from './UploadImages';

const CreateBlog = (props) =>{
    const [blogData,setBlogData] = useState('');
    const [imageFile,setImageFile] = useState();

    useEffect(()=>{
       props.setBlog(blogData)
    },[blogData])

    useEffect(()=>{
       props.setBlogImages(imageFile)
    },[imageFile])

    return(
        <>
        <div className='w3-card w3-margin w3-round-medium'>
            <TextEditorQuill setBlogData={setBlogData}/>
         </div>
         <div className='w3-margin w3-round-medium'>
          <UploadImages setImageFile={setImageFile}/>  
         </div>
         <div className='w3-margin'>
            <h4 className='w3-center'>Preview</h4>
            <DisplayTextQuill data={blogData} image={imageFile}/>
         </div>
        </>
    )
}
export default CreateBlog;