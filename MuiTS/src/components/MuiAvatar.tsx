import { Avatar, AvatarGroup, Stack } from '@mui/material'
import React from 'react'

export default function MuiAvatar() {
  return (
    <>
        <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <Avatar>BW</Avatar>
                <Avatar>CW</Avatar>
            </Stack>
        </Stack>

         <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>CW</Avatar>
            </Stack>
        </Stack>

         <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>CW</Avatar>
                <Avatar src='https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg' alt='John' />
            </Stack>
        </Stack>

        <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <AvatarGroup max={3}>
                    <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
                    <Avatar sx={{bgcolor:'success.light'}}>CW</Avatar>
                    <Avatar src='https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg' alt='John' />
                    <Avatar src='https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg' alt='John' />
                </AvatarGroup>
            </Stack>
        </Stack>
    </>
  )
}
