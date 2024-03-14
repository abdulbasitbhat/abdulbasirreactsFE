import React,{useEffect, useState} from 'react';
import TextEditorQuill from './TextEditor/TextEditorQuill';
import DisplayTextQuill from './TextEditor/DisplayTextQuill';
import './TextEditor/fontStyles.css'
import UploadImages from './UploadImages';
import { create_blog } from '../../Services/ApiServices';

const CreateBlog = (props) =>{
    const [blogData,setBlogData] = useState('');
    const [imageFile,setImageFile] = useState();

    useEffect(()=>{
       props.setBlog(blogData)
    },[blogData])

    useEffect(()=>{
       props.setBlogImages(imageFile)
    },[imageFile])

    const onSubmit = () =>{
      create_blog('First Blog',blogData,'Abdul').then(result =>{
         if(result.success){
            console.log('Saved on backend')
         }
      })
    }

    return(
        <>
        <div className='w3-card w3-margin w3-round-medium'>
            <TextEditorQuill setBlogData={setBlogData}/>
         </div>
         <div className='w3-margin w3-round-medium'>
          <UploadImages setImageFile={setImageFile}/>  
         </div>
         <button className='w3-btn w3-blue w3-margin w3-round-medium' onClick={onSubmit}>Publish</button>
         <div className='w3-margin'>
            <h4 className='w3-center'>Preview</h4>
            <DisplayTextQuill data={blogData} image={imageFile}/>
         </div>
        </>
    )
}
export default CreateBlog;