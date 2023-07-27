import React from 'react'

import Header from './component/Header'
import { Sidebar } from './component/Sidebar'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './component/user/Login'
import SignUp from './component/user/SignUp'
import Classes from './component/Classes/Classes'
// import AddClass from './component/Classes/AddClass'

export const App = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Classes' element={<Classes/>}/>
        {/* <Route path='/AddClass' element={<AddClass/>}/> */}
        
      </Routes>
    </div>
  )
}


