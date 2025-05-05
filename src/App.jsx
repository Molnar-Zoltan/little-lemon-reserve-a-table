import { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './assets/fonts/fonts.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer /> 
    </>
  )
}

export default App
