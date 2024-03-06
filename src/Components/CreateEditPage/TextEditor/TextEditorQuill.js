import React,{useRef}  from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import QuillToolbar, { modules, formats } from "./QuillEditorToolBar";
import "react-quill/dist/quill.core.css";
import './fontStyles.css';

const TextEditorQuill = (props) => {
    const [state, setState] = React.useState({value: ''});
    const handleChange = (value) => {
        setState({ value });
        props.setBlogData(value)
    };
    const quillRef = useRef();
    return (
        <div >
          <QuillToolbar quillRef={quillRef}/>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={state.value}
            onChange={handleChange}
            placeholder={"Start Here..."}
            modules={modules}
            formats={formats}
            className={'quillToolbar'}
          />
        </div>
      );

}
export default TextEditorQuill;  