import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {
    const [search, setSearch] = useState('');
    // async meaning this function gonna takes some times to fetch the data
    const handleSearch = async () => {
        if(search) {
            // const exerciseData = await fetchData();
        }
    }

  return (
    <Stack alignItems='center' mt='37px'
    // make it in the center of the page
    justifyContent='center'
    p='20px'>
        <Typography
            fontWeight={700}
            sx= {{fontSize : {lg: '44px', xs: '30px'}}}
            mb='50px'
            textAlign='center'
        >
            Awesome Exercises You <br/> Should Know
        </Typography>
        <Box position='relative' mb='72px'
         
        >
            <TextField 
                sx= {{
                    input: { fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'},
                    width: { lg: '800px', sx: '350px'},
                    backgroundColor: '#fff',
                    borderRadius: '40px '
                }}
                height='76px'       
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder='Search Exercises'
                type='text'
            />
            <Button className='search-btn'
                sx= {{
                    bgcolor: '#FF2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80pxs'},
                    fontSize: { lg: '20px', xs: '14px'},
                    height : '56px',

                    // so that the button go to the right size of the screen
                    position: 'absolute' ,
                    right: 0
                }}
                onClick={handleSearch}
            >
                Search
            </Button>

        </Box>
    </Stack>
  )
}

export default SearchExercises