import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEditBlog from './Components/CreateEditPage/CreateEditBlog';
import NavbarBootStrap from './Components/OtherComponents/BootstrapComponents/NavbarBootStrap';
import BlogDisplay from './Components/BlogPage/BlogDisplay';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogCards from './Components/MainPage/BlogCards';

function App() {
  const [blogImage,setBlogImage] = useState()
  const [blogData,setBlogData] = useState('')
  
  return (
    <>
    {/* {console.log('blogData',blogData)}
    {console.log('blogI',blogImage)} */}
    <NavbarBootStrap/>
    {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BlogDisplay blogImage={blogImage} blogData={blogData}/>} />
          <Route path="/create" element={<CreateEditBlog setBlogImage={setBlogImage} setBlogData={setBlogData}/>} />
        </Routes>
    </BrowserRouter> */}
    {/* <BlogCards/> */}
    {/* <BlogDisplay blogImage={blogImage} blogData={blogData}/> */}
    <CreateEditBlog setBlogImage={setBlogImage} setBlogData={setBlogData}/>
    </>
  );
}

export default App;
