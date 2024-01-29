import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function MuiCard() {
  return (
    <>
        <Box width='300px'>
            <Card>
                <CardMedia component='img' height='140' image='https://cdn.pixabay.com/photo/2023/07/07/13/17/flowers-8112546_1280.jpg' alt='img1' />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>React</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam adipisci 
                        aperiam accusantium possimus consequuntur officiis ducimus neque pariatur quaerat voluptate.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    </>
  )
}
