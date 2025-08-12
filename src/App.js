import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './Components/CreatePost';
import ViewMyPost from './Components/ViewMyPost';
import ViewAll from './Components/ViewAll';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <SignIn /> } />
      <Route path='signUp' element={ <SignUp /> } />
      <Route path='createPost' element={ <CreatePost /> } />
      <Route path='viewAll' element={ <ViewAll /> } />
      <Route path='viewMyPost' element={ <ViewMyPost /> } />
      <Route path='viewAll' element={ <ViewAll/> } />

    </Routes>
    </BrowserRouter>

  );
}

export default App;
