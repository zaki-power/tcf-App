import React from 'react'
import PageDescription from './component/pageDescription' 
import Header from './component/header'
import TestRéelle from './component/testRéelle.jsx'


function App() {
  return (
    <>
    <div className='px-10 font-inter overflow-hidden'>
      <Header/> 
      <PageDescription/>
      <TestRéelle/>
    </div>
    </>
  )
}

export default App