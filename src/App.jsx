import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './assets/fonts/fonts.css';
import { BrowserRouter } from "react-router-dom";

function App() {

  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <BrowserRouter basename="/little-lemon-reserve-a-table/">
      <Header setHeaderHeight={setHeaderHeight} />
      <Main headerHeight={headerHeight}/>
      <Footer /> 
    </BrowserRouter>
  )
}

export default App
