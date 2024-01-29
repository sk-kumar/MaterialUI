import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

export default function MuiRadioButton() {
    const [value,setValue]=useState('');
    console.log({value});
    
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }
  return (
    <>
        <Box>
            <FormControl>
                <FormLabel id='job-experience-group-label'>Year of Experience</FormLabel>
                <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
                    <FormControlLabel control={<Radio/>} label='0-2' value='0-2'/>
                    <FormControlLabel control={<Radio/>} label='3-5' value='3-5'/>
                    <FormControlLabel control={<Radio/>} label='6-10' value='6-10'/>
                </RadioGroup>
            </FormControl>
        </Box>
    </>
  )
}
