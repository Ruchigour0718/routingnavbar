import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const Layout = () => {
  return (
    <div>

<CssBaseline/>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default Layout