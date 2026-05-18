import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import SpareParts from './SpareParts.jsx'
import StockIn from './StockIn.jsx'
import StockOut from './StockOut.jsx'
import PageNotFound from './PageNotFound.jsx'
import Dashboard from './Dashboard.jsx'
import AddSparePart from './AddSparePart.jsx'
function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/spareparts' element={<SpareParts/>}/>
        <Route path='/stockin' element={<StockIn/>}/>
        <Route path='/stockout' element={<StockOut/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/addsparepart" element={<AddSparePart/>}/>
    </Routes>
  )
}

export default AppRoutes
