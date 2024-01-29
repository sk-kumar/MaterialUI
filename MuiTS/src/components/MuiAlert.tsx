import { Alert, AlertTitle, Stack } from '@mui/material'
import React from 'react'

export default function MuiAlert() {
  return (
    <>
        <Stack spacing={2}>
            <Alert severity='error'>This is an error alert</Alert>
            <Alert severity='warning'>This is an warning alert</Alert>
            <Alert severity='info'>This is an info alert</Alert>
            <Alert severity='success'>This is an success alert</Alert>

            <Alert variant='outlined' severity='error'>This is an error alert</Alert>
            <Alert variant='outlined' severity='warning'>This is an warning alert</Alert>
            <Alert variant='outlined' severity='info'>This is an info alert</Alert>
            <Alert variant='outlined' severity='success'>This is an success alert</Alert>

            <Alert variant='filled' severity='error'>
              <AlertTitle>Error</AlertTitle>
              This is an error alert</Alert>
            <Alert variant='filled' severity='warning'>This is an warning alert</Alert>
            <Alert variant='filled' severity='info'>This is an info alert</Alert>
            <Alert variant='filled' severity='success'>This is an success alert</Alert>
        </Stack>

        
    </>
  )
}
