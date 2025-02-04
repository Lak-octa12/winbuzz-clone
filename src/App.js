
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Slidebar from './components/Slidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Header/>
    <Content/>
    <Signin/>
    <Signup/>
    <Slidebar/>
    </>
  );
}

export default App;
