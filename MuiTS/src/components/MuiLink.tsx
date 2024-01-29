import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

export default function MuiLink() {
  return (
    <>
        <Stack spacing={2} direction='row' m={4}>
            <Link href='#'>Link</Link>
            <Link href='#' color='secondary'>Link</Link>
            <Link href='#' color='secondary' underline='none'>Link</Link>
            <Typography>
                <Link href='#' color='secondary' underline='none'>Link</Link>
            </Typography>
        </Stack>
    </>
  )
}
