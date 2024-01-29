// import SpeedDialIcon from '@mui/icons-material/Speed'
import EditIcon from '@mui/icons-material/Edit'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import { SpeedDial, SpeedDialAction,SpeedDialIcon } from '@mui/material'
import React from 'react'

export default function MuiSpeedDial() {
  return (
    <>
        <SpeedDial 
        ariaLabel='Navigation speed dial' 
        sx={{position:'absolute',bottom:16,right:16}} 
        icon={<SpeedDialIcon/>}
        >
            <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy' />
            <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' />
            <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share' />
        </SpeedDial>

        <SpeedDial 
        ariaLabel='Navigation speed dial' 
        sx={{position:'absolute',bottom:16,right:96}} 
        icon={<SpeedDialIcon/>}
        >
            <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy' tooltipOpen />
            <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' tooltipOpen/>
            <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share' tooltipOpen/>
        </SpeedDial>

         <SpeedDial 
        ariaLabel='Navigation speed dial' 
        sx={{position:'absolute',bottom:86,right:96}} 
        icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
        >
            <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy' tooltipOpen />
            <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' tooltipOpen/>
            <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share' tooltipOpen/>
        </SpeedDial>
    </>
  )
}
