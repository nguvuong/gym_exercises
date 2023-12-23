import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// box is a div with shading and colors 
import {Box} from '@mui/material'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    // m = "auto" is margin auto
    <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto ">
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<ExerciseDetail/>}/>

        </Routes>
        <Footer/>
    </Box>
  )
}



export default App