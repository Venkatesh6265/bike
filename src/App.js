import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Newbike from './components/Newbike';
import Usedbike from './components/Usedbike';
const App = () => {
  return (
    <>
      <Appbar/>
      <Banner/>
      <Newbike/>
      <Usedbike/>
    </>
  )
}

export default App
