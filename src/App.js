import React from 'react';
import './components/Contact.css';
import Contact from './components/Contact';


const Morales = {
name : "Marshall Morales",
avatar : 'https://randomuser.me/api/portraits/men/50.jpg',
online : true,
}

const Angel = {
  name : "Angel Cunningham",
  avatar : 'https://randomuser.me/api/portraits/men/3.jpg',
  online : false,
  }

const Ella = {
  name : "Ella Fleming",
  avatar : 'https://randomuser.me/api/portraits/women/84.jpg',
  online : true,
  }

  
function App() {
  return (
    <div className="App">
     <Contact  {...Morales}/>
     <Contact  {...Angel}/>
     <Contact  {...Ella}/>
    </div>
  )
}


export default App;
