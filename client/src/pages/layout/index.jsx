import React,{useState} from 'react'
import { Box,useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { UseSelector } from 'react-redux'
import Navbar from "component/Navbar"
const Layout = () => {
  return (
    <Box width="100%" height="100%" >
     <Navbar/>
     <Outlet/>
    </Box>
  )
}

export default Layout
