import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './assets/fonts/fonts.css';

function App() {

  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <>
      <Header setHeaderHeight={setHeaderHeight} />
      <Main headerHeight={headerHeight}/>
      <Footer /> 
    </>
  )
}

export default App
