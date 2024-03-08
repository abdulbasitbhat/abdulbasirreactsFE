import React,{useEffect,useState} from "react";
import './fontStyles.css'

const DisplayTextQuill = (props) => {
    const [image,setImage] = useState()
    const jsxString = props.data;
    
    useEffect(()=>{
    if(props.image instanceof File || props.image instanceof Blob){
        setImage(URL.createObjectURL(props.image))
    }
    },[props.image])
    return (
        <div style={{marginInline: '20%', maxWidth: '100%'}}>
            <div>
                {image &&
                <img src={image} style={{width: '100%', maxWidth: '100%', height: 'auto', marginBottom: '10px' }}/>
                }
            </div>
            <div dangerouslySetInnerHTML={{ __html: jsxString }} />
        </div>
    );
}
export default DisplayTextQuill;