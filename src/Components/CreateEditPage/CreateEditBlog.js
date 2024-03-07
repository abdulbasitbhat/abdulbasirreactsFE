import React,{useState,useEffect} from 'react';
import CreateBlog from './CreateBlog';
import './TextEditor/fontStyles.css'
import NavbarBootStrap from '../OtherComponents/BootstrapComponents/NavbarBootStrap';


const CreateEditBlog = (props) =>{
    const [blog,setBlog] = useState();
    const [blogImages,setBlogImages] = useState([])

    useEffect(() => {
        props.setBlogData(blog)
    },[blog])

    useEffect(() => {
        props.setBlogImage(blogImages)
    },[blogImages])

    return(
        <>  
          <CreateBlog setBlog={setBlog} setBlogImages={setBlogImages}/>
        </>
    )
}
export default CreateEditBlog;