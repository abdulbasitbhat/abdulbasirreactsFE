import React,{useState} from 'react';
import TextEditorQuill from './TextEditor/TextEditorQuill';
import DisplayTextQuill from './TextEditor/DisplayTextQuill';
import './TextEditor/fontStyles.css'

const CreateBlog = () =>{
    const [blogData,setBlogData] = useState('');
    return(
        <>
        <div className='w3-card w3-margin w3-round-medium'>
            <TextEditorQuill setBlogData={setBlogData}/>
         </div>
         <div className='w3-margin'>
            <DisplayTextQuill data={blogData}/>
         </div>
        </>
    )
}
export default CreateBlog;