import React,{useState} from 'react';
import CreateBlog from './CreateBlog';
import './TextEditor/fontStyles.css'

const CreateEditBlog = () =>{
    const [blogData,setBlogData] = useState('');
    return(
        <>
        <CreateBlog/>
        </>
    )
}
export default CreateEditBlog;