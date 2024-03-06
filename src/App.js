import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEditBlog from './Components/CreateEditPage/CreateEditBlog';
import NavbarBootStrap from './Components/OtherComponents/BootstrapComponents/NavbarBootStrap';

function App() {
  return (
    <>
      <NavbarBootStrap/>
      <CreateEditBlog/>
    </>
  );
}

export default App;
