import React from "react";
import './fontStyles.css'

const DisplayTextQuill = (props) => {
    const jsxString = props.data;
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: jsxString }} />
        </div>
    );
}
export default DisplayTextQuill;