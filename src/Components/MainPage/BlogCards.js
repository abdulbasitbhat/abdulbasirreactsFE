import React, {useState,useEffect} from 'react';
import { get_all_blogs } from '../../Services/ApiServices';

const BlogCards = () => {
    const [loader,setLoader] = useState(false)
    const [allBlogs,setAllBlogs] = useState([])

    useEffect(() => {
       getAllBlogs()
    },[])

    const getAllBlogs = () => {
        get_all_blogs().then(result => {
            if(result){
               console.log(result)
            }
        }).then(() => {
            setLoader(false)
        })
    }

    return(
        <>
          
        </>
    )
}

export default BlogCards;