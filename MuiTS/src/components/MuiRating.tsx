import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'

export default function MuiRating() {
    const [value,setValue]=useState<number|null>(null);
    console.log({value});
    
    const handleChange=(
        _event:React.ChangeEvent<{}>,
        newValue:number | null
        ) => {
        setValue(newValue)
    }
  return (
    <>
        <Stack spacing={2}>
            <Rating value={value} onChange={handleChange} precision={0.5}/>
        </Stack>
        {/* <Stack spacing={2}>
            <Rating value={value} onChange={handleChange} precision={0.5} size='large' icon={<FavoriteIcon fontSize='inherit'/>} emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}/>
        </Stack> */}
    </>
  )
}
