import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CatchingPokemonIcon  from '@mui/icons-material/CatchingPokemon'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function MuiNavbar() {
    const [anchorEl,setanchorEl]=useState<null | HTMLElement>(null);
    const open =Boolean(anchorEl);
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        setanchorEl(event.currentTarget)
    }
    const handleClose = ()=>{
        setanchorEl(null)
    }
  return (
    <>
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}}>APP</Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Service</Button>
                    <Button color='inherit'>About</Button>
                    <Button 
                    color='inherit' 
                    id='resources-button' 
                    onClick={handleClick} 
                    aria-label={open ?'resource-menu':undefined} 
                    aria-haspopup='true' 
                    aria-expanded={open}
                    endIcon={<KeyboardArrowDownIcon/>}
                    >
                    Resources
                    </Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
                <Menu 
                id='resources-menu' 
                anchorEl={anchorEl} 
                open={open} 
                MenuListProps={{'aria-labelledby':'resources-button'}} 
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'right'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}
                >
                    <MenuItem onClose={handleClose}>Blog</MenuItem>
                    <MenuItem onClose={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    </>
  )
}
