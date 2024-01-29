import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function MuiSelect() {
    const [country,setCountry]=useState('');
    // console.log({country});

    const [countries,setCountries]=useState<string[]>([])
    console.log({countries});
         
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value as string)
    }

    const handleChanges=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value= event.target.value
        setCountries(typeof value==='string' ? value.split(',') : value)
    }
  return (
    <>
        <Box width='250px'>
            <TextField label='Select Country' select value={country} onChange={handleChange} fullWidth>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>United State</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>

        <Box width='250px'>
            <TextField label='Select Country' select value={countries} onChange={handleChanges} fullWidth SelectProps={{multiple:true}}>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>United State</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>
        </Box>
    </>
  )
}
