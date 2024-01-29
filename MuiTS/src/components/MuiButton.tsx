import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FomatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon  from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon  from "@mui/icons-material/FormatItalic";
import { useState } from "react";

export default function MuiButton() {
    const [formats,setFormats]=useState<string | null>(null);
    console.log({formats});
    
    const handleFormatChange=(_event:React.MouseEvent<HTMLElement>,updatedFormats:string | null)=>{
        setFormats(updatedFormats)
    }
  return (
    <>
    {/* <div>
         <Button variant="text">Text</Button>
         <Button variant="contained">Contained</Button>
         <Button variant="outlined">Outlined</Button>
    </div> */}
    <Stack spacing={2} direction='row'>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack>

    <Stack spacing={2} direction='row'>
        <Button variant="contained" color="primary">Contained</Button>
        <Button variant="contained" color="secondary">Contained</Button>
        <Button variant="contained" color="error">Contained</Button>
        <Button variant="contained" color="warning">Contained</Button>
        <Button variant="contained" color="info">Contained</Button>
        <Button variant="contained" color="success">Contained</Button>
    </Stack>

    <Stack display='block' spacing={2} direction='row'>
        <Button variant="contained" size="small">Contained</Button>
        <Button variant="contained" size="medium">Contained</Button>
        <Button variant="contained" size="large">Contained</Button>
    </Stack>

    <Stack spacing={2} direction='row'>
        <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
        <Button variant="contained" startIcon={<SendIcon/>} disableElevation>Send</Button>
        <Button variant="contained" startIcon={<SendIcon/>} disableRipple>Send</Button>
        <Button variant="contained" endIcon={<SendIcon/>}>Send</Button>
        <IconButton aria-label="send" color="secondary" size="small"><SendIcon/></IconButton>
    </Stack>

    <Stack direction='row'>
        <ButtonGroup variant="text">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
    </Stack>
    <Stack direction='row'>
        <ButtonGroup variant="contained">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
    </Stack>
    <Stack direction='row'>
        <ButtonGroup 
        variant="contained" 
        orientation="vertical"
        size="small"
        color="secondary"
        aria-label="alignment button group"
        >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
        </ButtonGroup>
    </Stack>

    <Stack direction='row'>
        <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small" color="success">
            <ToggleButton value='bold' aria-label="bold">
                <FomatBoldIcon/>
            </ToggleButton>
            <ToggleButton value='italic' aria-label="italic">
                <FormatItalicIcon/>
            </ToggleButton>
            <ToggleButton value='underlined' aria-label="underlined">
                <FormatUnderlinedIcon/>
            </ToggleButton>
        </ToggleButtonGroup>
    </Stack>
    
    </>
  )
}
