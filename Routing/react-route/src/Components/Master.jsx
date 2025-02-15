import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Error from './Error'
import Login from './Login'

const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/error' element={<Error></Error>}></Route>
        </Routes>

    </div>
  )
}

export default Master