// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <Food></Food>
      <Card></Card>
      <Student name="Ashiq" age={25} isStudent={true}></Student>
      <Student name="Anika" age={15} isStudent={true}></Student>
      <Student name="Amena" age={48} isStudent={false}></Student>
      <Student name="Kabir" age={53} isStudent={false}></Student>
      <Button></Button>
      <Footer></Footer>      
    </div>
  );
}

export default App
