import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from '@mui/material'
import React from 'react'

export default function MuiImageList() {
  return (
    <>
        <Stack spacing={4}>
            <ImageList
            sx={{width:500,height:450}}
            cols={3}
            rowHeight={164}
            >
                {itemData.map(item=>(
                    <ImageListItem key={item.title}>
                        <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                        <ImageListItemBar title={item.title}/>
                    </ImageListItem>
                    
                ))}
            </ImageList>

            <Box sx={{width:500,height:450,overflow:'scroll'}}>
                <ImageList
                variant='masonry'
            cols={3}
            gap={8}
            >
                {itemData2.map(item=>(
                    <ImageListItem key={item.title}>
                        <img 
                        src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} 
                        alt={item.title} 
                        loading='lazy' />
                    </ImageListItem>
                ))}
            </ImageList>
            </Box>
        </Stack>
    </>
  )
}

const itemData=[
    {
        img:'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
        title:'Nature'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_1280.jpg',
        title:'Tea'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
        title:'Cloud'
    },{
        img:'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
        title:'img4'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_1280.jpg',
        title:'im5'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
        title:'img6'
    },{
        img:'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
        title:'img7'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_1280.jpg',
        title:'img8'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
        title:'img9'
    },

]

const itemData2=[
    {
        img:'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
        title:'Nature'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_1280.jpg',
        title:'Tea'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
        title:'Cloud'
    },{
        img:'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
        title:'img4'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_1280.jpg',
        title:'im5'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
        title:'img6'
    },{
        img:'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
        title:'img7'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_1280.jpg',
        title:'img8'
    },
    {
        img:'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg',
        title:'img9'
    },

]