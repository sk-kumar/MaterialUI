import MailIcon from '@mui/icons-material/Mail'
import { Badge, Stack } from '@mui/material'
import React from 'react'

export default function MuiBadge() {
  return (
    <>
        <Stack spacing={2} direction='row'>
            <Badge badgeContent={5}>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={5} color='primary'>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={5} color='secondary'>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={5} color='primary'>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={0} color='primary' showZero>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={100} color='primary' max={999}>
                <MailIcon/>
            </Badge>
            <Badge variant='dot' color='primary'>
                <MailIcon/>
            </Badge>
            <Badge variant='dot' color='primary' invisible={true}>
                <MailIcon/>
            </Badge>
        </Stack>
    </>
  )
}
