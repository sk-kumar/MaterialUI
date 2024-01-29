import FaceIcon from '@mui/icons-material/Face'
import { Avatar, Chip, Stack } from '@mui/material'
import React, { useState } from 'react'

export default function MuiChip() {
    const [chips,setChips]=useState(['Chip1','Chip2','Chip3']);
    const handleDelete=(chipToDelete:string)=>{
        setChips(chips=>chips.filter(chip=> chip !=chipToDelete))
    }
  return (
    <>
        <Stack direction='row' spacing={1}>
            <Chip label='Chip' />
            <Chip label='Chip outlined' color='secondary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>}/>
            <Chip label='Chip' color='primary' icon={<FaceIcon/>} />
            <Chip label='Click' color='success' onClick={()=>alert('Clicked')} />
            <Chip label='Delete' color='error' onClick={()=>alert('Clicked')} onDelete={()=>alert('Delete handler called')}/>
            {chips.map(chip=>(
                <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)} />
            ))}
        </Stack>
    </>
  )
}
