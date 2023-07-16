import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNotes from './components/AddNotes';
import Home from './components/Home';
import UpdateNote from './components/UpdateNote';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
     
      

      <BrowserRouter>
            <Navbar />
                <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/notes' element={<Notes />} />
                        <Route path='/addnotes' element={<AddNotes />} />
                        <Route path='/notes/:id' element={<UpdateNote />} />
                </Routes> 
                <Footer/>         
        </BrowserRouter>
      
    </div>
  );
}

export default App;
