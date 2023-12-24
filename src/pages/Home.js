import React, {useState} from 'react'
import Box from '@mui/material';
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  return (
    <Box>

      {/* the part with the text */}
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home