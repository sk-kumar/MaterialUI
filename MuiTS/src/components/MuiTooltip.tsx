import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

export default function MuiTooltip() {
  return (
    <>
        <Tooltip title='Delete'>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
        <Tooltip title='Delete' placement='right'>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
        <Tooltip title='Delete' placeholder='right' arrow>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
        <Tooltip title='Delete' placeholder='right' arrow enterDelay={500} leaveDelay={200}>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
    </>
  )
}
