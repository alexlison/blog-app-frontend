import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './Components/CreatePost';
import ViewMyPost from './Components/ViewMyPost';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <SignIn /> } />
      <Route path='signUp' element={ <SignUp /> } />
      <Route path='createPost' element={ <CreatePost /> } />
      <Route path='viewMyPost' element={ <ViewMyPost /> } />

    </Routes>
    </BrowserRouter>

  );
}

export default App;
