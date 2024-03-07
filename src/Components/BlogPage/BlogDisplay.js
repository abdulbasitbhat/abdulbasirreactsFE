import React from "react";
import '../CreateEditPage/TextEditor/fontStyles.css'
import DisplayTextQuill from "../CreateEditPage/TextEditor/DisplayTextQuill";
import NavbarBootStrap from "../OtherComponents/BootstrapComponents/NavbarBootStrap";

const BlogDisplay = (props) => {
    return (
        <>
        <div className='w3-margin'>
            <DisplayTextQuill data={props.blogData} image={props.blogImage}/>
         </div>
        </>
    );
}
export default BlogDisplay;